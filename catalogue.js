$(document).ready(function(){
    chargerCategories();
});

function chargerCategories() {
    $.get("categories.php", function(response){
        $("#divCat").html(response);
        $("#divCat").change(function() {
            chargerProduits($(this).val());
        })
    });
}

function chargerProduits(idc) {
    $.get("produits.php?idCat="+idc, function(response){
        $("#divProduits").html(response);
    });
}