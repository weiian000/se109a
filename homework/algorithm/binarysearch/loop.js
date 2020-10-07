function search(a, n){//a = array n = value
    var from = 0 
    var to = a.length-1

    while(from<=to)
    {
        var mid = Math.floor((from+to)/2)
        if(a[mid]=== n)
        {
            return mid
        }
        if(a[mid]<n)
        {
            from = mid+1
        }
        if(a[mid]>n)
        {
            to = mid -1
        }
    }
    return null//no number
}

  var t = search([1, 3, 4, 6, 7, 8], 4)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 5)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 8)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 9)
  console.log('t=', t)
  