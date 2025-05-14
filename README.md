# JS Performance
A lightweight Node.js-based benchmarking project that analyzes the performance of various JavaScript loop strategies for arithmetic operations, with generated HTML reports and visual charts.

# Compatibility
Tested with **Node.js 16.20.2** and **Node.js 22.0.0** versions.

# How to run project locally?
- Make sure you have [Node.js](https://nodejs.org/en/download) and npm (Node Package Manager) installed on your machine. 
For your convenience you can use nvm (Node Version Manager) which allows to switch between different node versions.
- Go to the root folder and do `npm install`. It will install all necessary dependencies.
- Check `package.json > scripts` section for the available commands:
  - Use `npm run js-loops-sum` to run feature of **Calculating Sum with for, forEach and reduce for different number of 
  items and generating report based on results**.

# Features
### 1. Calculate Sum with for, forEach and reduce for different number of items
**Description:** Calculates sum with `for`, `forEach`, `reduce` and `for of` operators and with different numbers: 
`1000`, `100000`, `1000000` and compares results for `Node.js 16.20.2` and `Node.js 22.0.0` versions. 
Generates dynamic table and bar chart html reports under the folder `results`.

**Path:** `src/features/js-loops-benchmark-sum.ts` 

**Command:** `npm run js-loops-sum`

**Results:**
You can view benchmark results in two ways:
- *Console and Browser:* See immediate results in your console. For a detailed view, check the dynamically generated HTML report file located in the `results` folder. The filename follows this pattern: `js-loops-benchmark-sum-dynamic-v${Node Version}`.
- *Static Reports:* Explore pre-generated HTML reports in the `results/static` folder. These include files such as `js-loops-benchmark-sum-static-v16-20-2.html` and `js-loops-benchmark-sum-static-v22-0-0.html.`

**Note:** Each time you run te command in the same Node env, the generated report file is replaced with new one.

# License: Read-Only Notice
- This project is released under the [MIT License](https://github.com/lala-hakobyan/js-performance/blob/main/LICENSE).  
- You are welcome to clone, explore, and reuse it for educational or benchmarking purposes.  
- However, to keep the repository clean and focused:  
  - ❌ Please do not fork, submit pull requests, or open issues.  
    If you have feedback or questions, feel free to reach out via LinkedIn or email.
  - ✅ If you'd like to extend it, feel free to clone it locally.  
- If you share or publish your own version, kindly retain the [license](https://github.com/lala-hakobyan/js-performance/blob/main/LICENSE) and provide appropriate credit.

# Author
**Name:** Lala Hakobyan  
**Email:** [hakobyanlala@gmail.com](mailto:hakobyanlala@gmail.com)  
**Linkedin Profile:** [linkedin.com/in/lala-hakobyan-71aa64b8](https://www.linkedin.com/in/lala-hakobyan-71aa64b8/)    