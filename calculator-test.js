describe ('Loan Calculations' , function (){
  it("should calculate the monthly rate correctly", function() {
    const values = {amount: 400000, years: 25, rate: 5}; 
    expect (calculateMonthlyPayment(values)).toEqual (2347.4178403755873);
  }); 


  it("should return a result with an integer", function() {
    const values = {amount: 400000, years: 25, rate: 5}; 
    expect (calculateMonthlyPayment(values)).not.toEqual (2348);
  });

  it ('should caluclate different interest rates' , function (){
    const values = {amount: 400000, years: 30, rate: 25}; 
    expect (calculateMonthlyPayment(values)).not.toEqual (8333);
  })

});
