function insert_nav_with_elements(nav_elements){
    let html_content = ``;
    for (const [key, sub_menu_content] of nav_elements) {
        html_content = html_content + `
        <div class="submenu">
        <a href="${sub_menu_content.get("url")}">${key}</a>
        `;
        content = sub_menu_content.get("content");
        if (content.length !== 0) {
            html_content = html_content + `<div class="smenu">`;

            content.forEach(element => {
                html_content = html_content + `<a href="#">${element}</a>`;
            });

            html_content = html_content + `</div>`
        }
        html_content = html_content + `</div>`
    }
    document.write(html_content)
}

function get_base_map(url){
    const base_map = new Map()
    base_map.set("url", url)
    return base_map
}

function get_sub_menu_content(url){
    base_map = get_base_map(url)
    base_map.set("content", [])
    return base_map
}

function get_sub_menu_elements_for_math_section(url){
    base_map = get_base_map(url)
    base_map.set("content", [
        "Análisis Matemático",
        "Álgebra Lineal",
        "Probabilidad",
        "Estadística"
    ])
    return base_map
}

function get_sub_menu_elements_for_programming_section(url){
    base_map = get_base_map(url)
    base_map.set("content", [
        "Estructuras de Datos",
        "Algoritmia",
        "Lenguajes de Programación",
    ])
    return base_map
}

function loader(){
    document.write(`<div class="loader-wrapper">
    <span class="loader"></span></span>
    </div>`)
    $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    });
}