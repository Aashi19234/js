console.log(2!=1)
console.log(2>1)//basic comparisons
console.log("2">1)//compiler automatically converts string to number
console.log(null>0)
console.log(null==0)
console.log(null>=0)
/*
Abstract Relational Comparison: The >= operator in JavaScript triggers an abstract relational comparison. 
The expression null >= 0 is interpreted as !(null < 0).

Type Coercion:

When using the < operator, JavaScript first tries to convert the operands to primitive types.
null is converted to 0 because null is considered as 0 when compared with numbers.
So, the comparison null < 0 becomes 0 < 0.
Comparison:

The comparison 0 < 0 is false because 0 is not less than 0.  
Negation:

The original expression null >= 0 is equivalent to !(null < 0).
Since null < 0 is false, !(false) is true.
Therefore, null >= 0 evaluates to true because of how JavaScript handles the type coercion and comparison operations.


*/

console.log(undefined==0)