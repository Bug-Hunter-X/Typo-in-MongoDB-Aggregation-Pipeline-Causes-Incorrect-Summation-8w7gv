# MongoDB Aggregation Pipeline Typo
This repository demonstrates a common error in MongoDB aggregation pipelines: a simple typo that leads to incorrect results. The bug involves a misspelling in the field name used within the `$sum` operator of the `$group` stage. The solution shows how to correct this typo to obtain the accurate aggregation result.

## Bug
The original code contains a typo in the field name used within the `$sum` operator. This causes the aggregation to sum an unintended field, producing an inaccurate result.

## Solution
The corrected code replaces the misspelled field name with the correct one, ensuring accurate calculation of the sum.