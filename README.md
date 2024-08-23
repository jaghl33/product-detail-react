# fed-interview-exercise
## **Instructions**

Thank you for your interest in becoming a Frontend Developer at REI! To give you a
better idea of what we're looking for, here are some items that make a successful
engineering candidate at REI:

* Candidates are comfortable working with a JavaScript framework. For this project and all frontend applications at REI, we use VueJS.
* Candidates exhibit expertise in CSS and have a heavy focus on the presentation layer.
* Candidates demonstrate knowledge and interest in accessibility.
* Candidates are able to follow existing conventions, syntax, and coding style.
* Candidates can write effective frontend unit tests.

**Objective**: Today, you're in charge of building our Product Page. Treat it like production code. That is, develop your software in the same way that you would for any code that is intended to be deployed to production. This may just be an interview exercise, but we really would like to get an idea of how you build code on a day-to-day basis.
## **Resources**

**Design Spec**

We've provided design screenshots and a style guide for you to work from, which can be found in the `resources` directory. Notice there are several states reflected in the different images. Try to cover as many of the different states as you can. 

The repository contains an image carousel component, and your job is to build the rest from there. Do your best! We're excited to see your attention to detail and the different ways this page can be built. 

**Mock Product Data**

We’ve provided data that you should use to feed the content on your product page. It can be found in the root directory in `product-data.json`. 

**Technical Resources**
* [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
* [Vue Test Utils documentation](https://vue-test-utils.vuejs.org/)
* [Chai.js documentation](https://www.chaijs.com/)
* [Vite Configuration Reference](https://vitejs.dev/config/).


## Requirements

The requirements for this exercise are different depending on the role you are applying for. Your hiring contact should give you instructions on which level we would like you to complete.

### Level 1
This is the set of core requirements that we expect to see implemented in a finished Level 1 exercise:

1. Build the responsive UI represented in the screenshots within the `/resources` folder of this repository. In that folder you will find  files called `design-mobile.png` and `design-desktop.png`. Use `design-mobile` for screen sizes up to 768px, and `design-desktop` for 769px and above.
    * Please build each section to match the design spec as closely as possible. 
    * We do not expect the links to actually go anywhere. You can just leave them with an empty href.
    * You can look at `design-interactive-states.png` in the `/resources` folder to see the interactive designs for the buttons and links.
    * All icons you may need are located in `/src/assets`.

### Level 2
In addition to the Level 1 requirements:

1. **Breadcrumbs**
    * If there are more than two breadcrumbs, then only the last two should be displayed, and all that come before that should be truncated with an ellipsis (as shown in the design mockup).
    * If the ellipsis is clicked, then display the full list of breadcrumbs (it is okay if they need to wrap to multiple lines).
2. **Product Information**
    * Display an array of size selections - these **do not** impact the price reflected in the Add to Cart button.
    * Include the ability to select a size. If an unavailable size is not selected, please show the error state depicted in `design-interactive-states.png`.
    * Include the ability to increment/decrement quantity. This **does** impact the price reflected in the Add to Cart Button.
3. **Add to Cart**
    * Include the member reward note, and use the icon provided in `“../assets/mushrooms.svg”`.
    * Program the Add to Cart button to reflect the total cost as a product of the quantity and price.
5. Follow accessibility best practices.
6. Add unit test coverage. As a starting point, we’ve created a `__tests__` directory with one test already. 

## How to Get Up and Running

1. `cd` into the root directory of this project.
2. To run the project, you should use Node version 18.13.0
3. Run `npm install`.
4. Then `npm run dev`.
5. You will see a localhost URL provided by Vite in your terminal. Open this URL to see the application running in your browser.
6. To Run unit tests: `npm run test:unit`.
7. To run ESLint: `npm run lint`
8. Compile and Minify for Production: `npm run build`
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
## Keep in Mind

* Commit directly to this repository. When you're done, create a pull request to the candidate-snapshot branch.
* This is a realistic example of the work our team does, hopefully you find it both challenging and interesting.
* Feel free to leave comments in your code or on the PR to help us understand your thought process.
* We use the [Airbnb ESLint config](https://www.npmjs.com/package/eslint-config-airbnb-base) as our code style guidelines.
* Please do not share this exercise with anyone but us.
* Have fun!# product-detail-react
