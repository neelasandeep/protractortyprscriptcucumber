"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    capabilities: {
        'browserName': 'chrome'
    },
    cucumberOpts: {
        require: [
            './stepDefinations/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNXLFFBQUEsTUFBTSxHQUFRO0lBQ3JCLGtFQUFrRTtJQUNsRSxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUVqRSxLQUFLLEVBQUMsQ0FBQywwQkFBMEIsQ0FBQztJQUVsQyxZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsUUFBUTtLQUcxQjtJQUNELFlBQVksRUFBQztRQUNULE9BQU8sRUFBQztZQUNSLHdCQUF3QjtTQUMzQjtLQUNEO0NBQ0MsQ0FBQyJ9