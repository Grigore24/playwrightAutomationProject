import {test} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay';

// test.describe('FORM PAGE', () => {
//     test.beforeAll(() => {
//         console.log('beforeAll')
//     })

//     test.beforeEach(() =>{
//         console.log('beforeEach')
//     })
//     test.afterEach(() =>{
//         console.log('afterEach')
//     })
//     test.afterAll(() =>{
//         console.log('afterAll')
//     })
//     test("Test1",() => {
//         console.log("test1");
//     });
//     test("Test2",() => {
//         console.log("test2");
//     });
// })
test.describe('FORM PAGE TYPE', () => {
    test("Fill all fields",async({page}) => {

        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo");
        await page.locator('#name').fill('Mike');
        await page.locator("[class='w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5'][type='email']")
        .pressSequentially('greyt@googlemail.com',{ delay:100 })
        await page.locator("input[placeholder='Password']").fill("1234");
        await page.locator("[for='companyname'] ~ input[placeholder = 'Company']").fill("Happy")
        await page.selectOption("select[name = 'country']", {label:'Ukraine'})
        await page.locator("label:has-text('City*') ~ input#inputCity").fill('Orlando')
        await page.getByPlaceholder("Address 1").fill("Orlando")
        await page.getByRole('textbox', {name:'Address 2'}).fill("706 Weybrid")
    })
})
