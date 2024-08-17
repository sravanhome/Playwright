const{test,expect}=require('@playwright/test')



test('singleuserpostrequest',async({request})=>{

     const response=await request.post('https://reqres.in/api/users',{
        "name": "qa",
        "job": "testing"
     })
         expect(response.status()).toEqual(201)
         console.log((await response.json()))
    })


