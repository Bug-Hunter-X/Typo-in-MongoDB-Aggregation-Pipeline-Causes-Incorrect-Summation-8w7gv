```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* ... */ } },
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Typo in the field name
  {$sort: {sum: -1}},
  {$limit: 10}
])
```