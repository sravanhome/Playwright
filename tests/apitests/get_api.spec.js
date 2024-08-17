const{test,expect}=require('@playwright/test')


test('singleusergetrequest',async({request})=>{
      const response=await request.get('https://reqres.in/api/users?page=2')
      expect(response.status()).toEqual(200)
      //const text=await response.text()
      //expect(text).toContain('Janet')
      console.log(await response.json())
})


