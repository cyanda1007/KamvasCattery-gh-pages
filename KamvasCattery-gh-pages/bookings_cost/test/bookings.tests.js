var booking1 ={
    check_in_day: 'Monday',
    duration: 3,
    cat_name : 'Snowy'
};
var booking2 ={
    check_in_day: 'Wednesday',
    duration: 3,
    cat_name : 'Snowy'
};
var booking3 ={
    check_in_day: 'Friday',
    duration: 3,
    cat_name : 'Snowy'
};

describe("the booking function", function(){
    it("should return that if called with this parameter monday.", function(){
        assert.equal('135', bookingCost(booking1)) 
    })
    it("should return that if called with this parameter wednesday.", function(){
       assert.equal('101.25', bookingCost (booking2))
    })
    it(" should return that if called with this parameter friday.",function(){
        assert.equal('114.75',bookingCost (booking3))
           
    })
});
