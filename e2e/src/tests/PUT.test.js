import {test, expect} from '@playwright/test'


test.only('Verify PUT request test', async ({request}) => {

    const response = await request.put('/api/users/2', {
        data: {
            name: 'morpheus',
            job: 'zion resident'
        }
        
    })

    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy();

    console.log(await response.text());
})