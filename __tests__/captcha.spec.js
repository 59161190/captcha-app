class Captcha{
    static LeftMode(){
        return 'L'
    }
    static RightMode(){
        return 'R'
    }
    constructor(leftOperand,operator,rightOperand,mode){
        this.leftOperand = leftOperand
        this.operator = operator
        this.rightOperand = rightOperand
        this.mode=mode
    }
    generate(){
        // if(this.mode === 'R') 
        //     return `${this.leftOperand} + ${this.generateNum(this.rightOperand)}`
        if(this.mode === Captcha.LeftMode()) 
            return `${this.generateNum(this.leftOperand)} + ${this.rightOperand}`
        else if(this.mode === Captcha.RightMode()) 
            return `${this.leftOperand} + ${this.generateNum(this.rightOperand)}`
    }
    generateNum(num){
        var word = ['ZERO', `ONE`,`TWO`,`THREE`,`FOUR`,`FIVE`,`SIX`,`SEVEN`,`EIGHT`,`NINE`]
        return word[num]
    }
    
}


describe('CAPTCHA App',() =>{
    function generateCaptcha(leftOperand,operator,rightOperand,mode){
        captcha = new Captcha(leftOperand,operator,rightOperand,mode)
        return captcha.generate()
    }
    //1 + one
    it('should echo "1 + ONE" when input is 1+1 ',() =>{
        //Arrange
        // let captcha = new Captcha( 1,'+',1,Captcha.RightMode())
        //Act
        let got = generateCaptcha(1,'+',1,Captcha.RightMode())
        //Assert
        expect(got).toBe('1 + ONE')
    })
    // 1 + TWO 
    it('should echo "1 + TWO" when input is 1+2 ',() =>{
        //Arrange
        
        //Act
        let got = generateCaptcha(1,'+',2,Captcha.RightMode())
        //Assert
        expect(got).toBe('1 + TWO')
    })
    // 3 + ONE
    it('should echo "3 + ONE" when input is 3+1 ',() =>{
        //Arrange
        
        //Act
        let got = generateCaptcha(3,'+',1,Captcha.RightMode())
        //Assert
        expect(got).toBe('3 + ONE')
    })
    // 9 + ONE
    it('should echo "9 + ONE" when input is 9+1 ',() =>{
        //Arrange
        
        //Act
        let got = generateCaptcha(9,'+',1,Captcha.RightMode())
        //Assert
        expect(got).toBe('9 + ONE')
    })
    // TWO + 1
    it('should echo "TWO + 1" when input is 2+1 ',() =>{
        //Arrange
        
        //Act
        let got = generateCaptcha(2,'+',1 , Captcha.LeftMode())
        //Assert
        expect(got).toBe('TWO + 1')
    })
    // NINE + 9
    it('should echo "NINE + 9" when input is 9+9',() =>{
        //Arrange
        
        //Act
        let got = generateCaptcha(9,'+',9 , Captcha.LeftMode())
        //Assert
        expect(got).toBe('NINE + 9')
    })
})