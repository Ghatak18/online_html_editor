function run(){
    let html_item = document.getElementById("html-text").value;
    const css_item = document.getElementById("css-text").value;
    let js_item = document.getElementById("js-text").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html_item+"<style>" +css_item +"</style>";
    output.contentWindow.eval(js_item);
}