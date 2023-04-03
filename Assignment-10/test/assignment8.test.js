const assert=require('chai').assert;
const expect=require('chai').expect;
const should=require('chai').should();

const dateDay =require('../../Assignment-8/question1');
const arrayDatatype =require('../../Assignment-8/question3');
const replaceString =require('../../Assignment-8/question4');
const json_string=require('../../Assignment-8/question5');

describe('Assignment -8 Test',function(){
    describe('Question1 test',function(){
        it('should return sunday',function(){
            const date=new Date('Feb 20, 2005 23:25:10');
            assert.equal(dateDay(date),'Sunday');
        })
    })
    describe('Question3 test',function(){
        it('should return datatype of array',function(){
            const person=["Rohan","Josh",46,true];
            assert.equal(arrayDatatype(person),'string string number boolean');
        })
    })
    describe('Question4 test',function(){
        it('should return dogs replaced by cats',function(){
            let str="I love dogs. Dogs are caring. Dogs are loved by most people.";
            replaceString(str).should.equal('I love cats. Cats are caring. Cats are loved by most people.');
        })
    })
    describe('Question5 test',function(){
        it('should return person details',function(){
            expect(json_string()).to.equal('{"Name":"James","Age":25,"City":"Coimbatore","Nationality":"English"}');
        })
    })    
})