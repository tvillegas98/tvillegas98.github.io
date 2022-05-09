function loader(){
    document.write(`<div class="loader-wrapper">
    <span class="loader"></span></span>
    </div>`)
    $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    });
}