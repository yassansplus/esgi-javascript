function type_check_v1(myNumber, typecheck ='number'){
        return (typeof(myNumber) == typecheck);
}

console.log(type_check_v1("test"));