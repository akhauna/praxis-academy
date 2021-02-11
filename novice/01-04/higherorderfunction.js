const add = (a,b)=>{
    c=a+b;
    return (d)=>{
        return (e)=>{
            return (x,y)=>{
                q=x+y;
            
            return d+c+e+q;
            }
        }
    }
}

b=add(5,6)

v=b(7)

r=v(5)

console.log(r(5,5))