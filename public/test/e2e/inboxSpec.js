'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Epost App', function () {
    angular.scenario.matcher('toTrim', function (expected) {
        return this.actual.trim() === expected;
    });

    describe('inbox view', function () {
        beforeEach(function () {
            browser().navigateTo('/assets/products-e2e.html');
            // is needed to set the configuration cookie (is a bug has to befixed in the future)
            browser().navigateTo('/assets/products-e2e.html');
        });

        it('should show inbox page with 2 emails', function () {
            browser().navigateTo('#/inbox');
            browser().navigateTo('#/inbox');
            //browser().navigateTo('/assets/products-e2e.html#/inbox');
            expect(browser().location().url()).toBe('/inbox');
            expect(element('.thumb').count()).toBe(2);
            expect(element('.thumb:eq(0)').text()).toTrim('Rechnung E-Postbrief');
            expect(element('.thumb:eq(1)').text()).toTrim('Ihre E-POST App ist freigeschaltet. Willkommen in der E-POST Welt.');
        });
    });

    describe('oauth2 code to token test', function () {
        it('when get a code parameter than fetch the acces token for that code and redirect to connect page and display the response token in the json debug directive', function () {
            browser().navigateTo('/assets/products-e2e.html?code=eyJjb250ZW50Ijoie1widW5pcXVlSWRcIjpcIjc0ODY1OTQ1MTE2NDAxMjY3NlwiLFwiY2xpZW50XCI6XCJjb21wb25lbnRcIixcImNyZWF0aW9uVGltZVwiOjEzNzgzODY4NDQ5NjMsXCJ0aWNrZXRcIjp7XCJ1bmlxdWVJZFwiOlwiNjJmZGUxNWUtMDgzZi00MTgyLWE3MDUtY2Q0ODY4NDU1YmVmXCIsXCJjcmVhdGlvblRpbWVcIjoxMzc4Mzg2ODQ0OTYzLFwibmV4dFVwZGF0ZVwiOjEzNzgzODc0NDQ5NjMsXCJ0b2tlblR5cGVcIjpcIkJlYXJlclwiLFwiaWRlbnRpdHlcIjpcIjI4NDg3NTkyMDMwODk5NjY3NjIwODA1MDI0NDYyMzcxMzA0ODM1OFwiLFwiYXV0aE5pdmVhdVwiOlwiTk9STUFMXCIsXCJzY29wZVwiOlwicmVhZF9sZXR0ZXIgc2VuZF9oeWJyaWRcIixcInJvbGVzXCI6W1wiUEtcIl19fSIsImRldGFjaGVkQ29udGVudCI6ZmFsc2UsInNpZ25hdHVyZUI2NCI6IkZUeU1kK2xUUHZsbUtxOVNOdnhJditjdWk2SmsvTk5XbFhBL2tsM05GR0EyOFc0YmFHMUhHdi9FZlVrTWlxTFBEdzdBNjlMTTdwaXYzVFFNelIzc0NmTE1XYXY5NnZGMWZabG5Xem14NWNteXcyTG5RU1l5YU9BMFRBdHRhSktNb1p6c0tic2tJT3BHdk41bGJmTVdobHV3R3Z4dU1ZbmpvYXNYS1hXUjBpcHdVU291RWI3Z0E3R2kyNndKRWhnczVhdmlNc0lUMlRra21nMFZrQkd3U0VKeThYckN6YjArdXAreVYreDBmajFSRTViRXVxUEJ2cVhLbXg0YWJoNXFLK0J4RWQzKzVtK0xJYTRnbzhSYlAxSEFJeEVtMnVzdzVFTnU5end5U3AzNTFXRlp5V3ZjK3o4R0c2eDE5L2RkOGhnbjVrZ1NiZU5EdnEzdC8zRkRKdz09IiwidmVyc2lvbiI6IjEvMSIsImNvbnRlbnRDbGFzc05hbWUiOiJDT0RFIiwic2VyaWFsIjoiOTc2NTIzOTM5MjQzODY0NTU3MDAyMjYzIn0.&scope=read_letter%20send_hybrid');
            expect(browser().location().path()).toBe('/connect');
            expect(element('ul > li.child').count()).toBe(3);
            expect(element('ul > li.child:eq(0)').text()).toBe('access_token: eyJjb250ZW50Ijoie1widW5pcXVlSWRcIjpcIjU3YTZjZjhlLTk2Y2QtNGY0Zi05YWU4LWZjNGE1Zjk1YmU3YlwiLFwiY3JlYXRpb25UaW1lXCI6MTM3ODM5ODcxNTQ5MyxcIm5leHRVcGRhdGVcIjoxMzc4Mzk5MzE1NDkzLFwidG9rZW5UeXBlXCI6XCJCZWFyZXJcIixcImlkZW50aXR5XCI6XCIyODQ4NzU5MjAzMDg5OTY2NzYyMDgwNTAyNDQ2MjM3MTMwNDgzNThcIixcImF1dGhOaXZlYXVcIjpcIk5PUk1BTFwiLFwic2NvcGVcIjpcInJlYWRfbGV0dGVyIHNlbmRfaHlicmlkXCIsXCJyb2xlc1wiOltcIlBLXCJdfSIsImRldGFjaGVkQ29udGVudCI6ZmFsc2UsInNpZ25hdHVyZUI2NCI6Im52SXFUV01IaGlrd1hXOW9MWG03d2JEay8vcHdyT2xxdEpESE13dGEwbFozMkFYTTczMnpFdTN1djlQTVlFMnBMWUl4NDBBd1c4SC9RZ3cvRVZKaWdHYjZJbTlzRmpCb21TTmpHTWJvUlJlOG1pSGlaZGdOaEFTSEF5TDgxZnNyMjZEdXArSHNUQmUrZGJIK3VuZFg3eFJ1bHAwNnFMK1JSa0JyVnJJRU5TQkFuS1F4dVJsdkptbDNPOVhEbERoVGRRK3RoUFZkTC9TTFBuQitmNmFPTWxsQk1aZ1VJWXlhTlNIZk9Dem85OE8vdlJKcmpEZ3lYOVF2d1hFZENmR0RZSjRlWTM1VytYZnhjc3c4dXNubVZBRVRKWDVCMXcyWDc2RmdQaXpST3ZLSUxQRFY0NFBxMTBOZ3c3bGZ4NzhFaEFqNnk1SG0zMERIZVl1L1ZHTGFOUT09IiwidmVyc2lvbiI6IjEvMSIsImNvbnRlbnRDbGFzc05hbWUiOiJBVVRIIiwic2VyaWFsIjoiOTc2NTIzOTM5MjQzODY0NTU3MDAyMjYzIn0.');
        });
    });

    describe('Phone list view', function () {


        /*it('should filter the phone list as user types into the search box', function () {
         beforeEach(function () {
         browser().navigateTo('../../products.html#/products');

         //expect(repeater('.products li').count()).toBe(20);

         //input('query').enter('nexus');
         //expect(repeater('.products li').count()).toBe(1);
         element('a').query(function (selectedElements, done) {
         selectedElements.each(function (idx, elm) {
         var thisOne = selectedElements[idx]; //<-- (same as "= this;").
         console.log("ROYDEBUG:  " + idx + " - " + thisOne);
         //element(thisOne).click();                //<-- doesn't work :(
         //element(this).click();                   //<-- doesn't work :(
         //element(selectedElements[idx]).click();  //<-- doesn't work :(
         });
         done();
         });
         input('query').enter('motorola');
         expect(repeater('.products li').count()).toBe(0);
         });
         });*/


        /*it('should be possible to control phone order via the drop down select box', function() {
         input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

         expect(repeater('.phones li', 'Phone List').column('phone.name')).
         toEqual(["Motorola XOOM\u2122 with Wi-Fi",
         "MOTOROLA XOOM\u2122"]);

         select('orderProp').option('Alphabetical');

         expect(repeater('.phones li', 'Phone List').column('phone.name')).
         toEqual(["MOTOROLA XOOM\u2122",
         "Motorola XOOM\u2122 with Wi-Fi"]);
         });


         it('should render phone specific links', function() {
         input('query').enter('nexus');
         element('.phones li a').click();
         expect(browser().location().url()).toBe('/phones/nexus-s');
         });*/
    });


    /*describe('Phone detail view', function() {

     beforeEach(function() {
     browser().navigateTo('../../app/index.html#/phones/nexus-s');
     });


     it('should display nexus-s page', function() {
     expect(binding('phone.name')).toBe('Nexus S');
     });


     it('should display the first phone image as the main phone image', function() {
     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
     });


     it('should swap main image if a thumbnail image is clicked on', function() {
     element('.phone-thumbs li:nth-child(3) img').click();
     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

     element('.phone-thumbs li:nth-child(1) img').click();
     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
     });
     });*/
});
