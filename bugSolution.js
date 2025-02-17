```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* ... */ } },
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Corrected field name
  {$sort: {sum: -1}},
  {$limit: 10}
])
```