# es-modules

- Module System for JavaScript 🎉

Currently:
- Bunch of parts to construct a complex
- jQuery (<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>)
- $( "button.continue" ).html( "Next Step..." )
- Use webpack to bundle multiple files into 1 file

Native ES Modules:
- Defer by default (doesnt block html parser by default)
- Modules are fetched with CORS, so follow same security rules
- Can use nomodule for fallback on other browsers:
<script nomodule src="fallback.js"></script>


Can we use it?
- Some browsers are playing catch up and there is some variations between browsers that needs to be sorted out
- Still need to use tools like webpack for optimisations
- Paul Irish: https://twitter.com/paul_irish/status/979867890080915456?lang=en

