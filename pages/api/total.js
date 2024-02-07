import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const pip = await prisma.$queryRaw`SELECT
    Month,
    Year,
    SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 15 THEN Hours_Min ELSE 0 END) AS Total_Hours_Min_1_to_15,
    SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 15 THEN Minutes ELSE 0 END) AS Total_Minutes_1_to_15,
    SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 15 THEN Hours_Min ELSE 0 END) + SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 15 THEN Minutes ELSE 0 END) AS All_Total_1_to_15,
	SUM(CASE WHEN DAY(Date) BETWEEN 16 AND 31 THEN Hours_Min ELSE 0 END) + SUM(CASE WHEN DAY(Date) BETWEEN 16 AND 31 THEN Minutes ELSE 0 END) AS All_Total_16_to_31,
    SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 31 THEN Hours_Min ELSE 0 END) + SUM(CASE WHEN DAY(Date) BETWEEN 1 AND 31 THEN Minutes ELSE 0 END) AS All_Total_1_to_31
FROM (
    SELECT
        Date,
        Month,
        Year,
        Name,
        AM_In,
        AM_Out,
        PM_In,
        PM_Out,
        TIME_FORMAT(
            SEC_TO_TIME(
                COALESCE(TIME_TO_SEC(AM_In_Late), 0) +
                COALESCE(TIME_TO_SEC(AM_Out_Late), 0) +
                COALESCE(TIME_TO_SEC(AM_Out_Under), 0) +
                COALESCE(TIME_TO_SEC(PM_In_Late), 0) +
                COALESCE(TIME_TO_SEC(PM_In_Under), 0) +
                COALESCE(TIME_TO_SEC(PM_Out_Under), 0)
            ),
            '%H:%i'
        ) * 60 AS Hours_Min,

        TIME_FORMAT(
            SEC_TO_TIME(
                COALESCE(TIME_TO_SEC(AM_In_Late), 0) +
                COALESCE(TIME_TO_SEC(AM_Out_Late), 0) +
                COALESCE(TIME_TO_SEC(AM_Out_Under), 0) +
                COALESCE(TIME_TO_SEC(PM_In_Late), 0) +
                COALESCE(TIME_TO_SEC(PM_In_Under), 0) +
                COALESCE(TIME_TO_SEC(PM_Out_Under), 0)
            ),
            '%i'
        ) AS Minutes

    FROM (
        SELECT
            Date,
            Month,
            Year,
            Name,
            AM_In,
            AM_Out,
            PM_In,
            PM_Out,
            CASE
            WHEN AM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_In, '%h:%i %p'), '%H:%i') > STR_TO_DATE('08:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(AM_In, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('08:00', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_In_Late,

        CASE
            WHEN AM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_Out, '%h:%i %p'), '%H:%i') > STR_TO_DATE('12:30', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(AM_Out, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('12:30', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_Out_Late,

        CASE
            WHEN AM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_Out, '%h:%i %p'), '%H:%i') < STR_TO_DATE('12:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('12:00', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(AM_Out, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_Out_Under,

        CASE
            WHEN PM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_In, '%h:%i %p'), '%H:%i') > STR_TO_DATE('13:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(PM_In, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('13:00', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_In_Late,

        CASE
            WHEN PM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_In, '%h:%i %p'), '%H:%i') < STR_TO_DATE('12:31', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('12:31', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(PM_In, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_In_Under,

        CASE
            WHEN PM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_Out, '%h:%i %p'), '%H:%i') < STR_TO_DATE('17:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('17:00', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(PM_Out, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_Out_Under

        FROM (
            -- Your existing query here
            SELECT
                DATE_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%Y-%m-%d') AS Date,
                MONTH(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p')) AS Month,
                YEAR(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p')) AS Year,
                Name AS Name,
                MIN(CASE WHEN checktype = 'C/In' AND TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%H:%i') BETWEEN '02:00' AND '11:00' THEN TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%h:%i %p') END) AS AM_In,
                MIN(CASE WHEN checktype = 'Out' AND TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%H:%i') BETWEEN '09:00' AND '14:00' THEN TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%h:%i %p') END) AS AM_Out,
                MIN(CASE WHEN checktype = 'Out Back' AND TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%H:%i') BETWEEN '10:00' AND '16:00' THEN TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%h:%i %p') END) AS PM_In,
                MIN(CASE WHEN checktype = 'C/Out' AND TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%H:%i') BETWEEN '13:00' AND '23:00' THEN TIME_FORMAT(STR_TO_DATE(CHECKTIME, '%d/%m/%Y %h:%i %p'), '%h:%i %p') END) AS PM_Out
            FROM
                inoutdata
            GROUP BY
                Date, Month, Year, Name
            ORDER BY
                Date, Name
        ) AS Subquery
    ) AS IntermediateResult
) AS GroupedResult
GROUP BY
    Month, Year`;

    res.status(200).json(pip);
};

export default handler;
