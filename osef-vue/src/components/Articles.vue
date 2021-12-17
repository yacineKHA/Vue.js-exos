<template>
    <div id="conteneur">
        <div id="article">
            <div id="pseudo">
                img et pseudo et groupe
            </div>
            <div id="contenu">
                <div id="img">
                    img
                </div>
                <div id="texte">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro eos blanditiis cupiditate explicabo? Obcaecati blanditiis asperiores natus nostrum ut placeat vero eveniet nesciunt similique, omnis nemo! Alias, esse explicabo!
                    Id ducimus, nostrum adipisci ab voluptatum saepe sed facilis animi dolorum quod nemo vitae corrupti doloremque debitis aliquam! Repellat ex odio necessitatibus sapiente velit dicta animi aliquam adipisci quae minima?
                    Voluptate blanditiis quos minus facere nam eaque ipsam neque, quo illum voluptatem consectetur consequatur fugit perferendis rerum amet. Quisquam perspiciatis reprehenderit incidunt numquam aliquid eveniet reiciendis maxime, cum labore ratione.
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        
    }

</script>


<style scoped>

    #conteneur{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: cadetblue;  
        text-overflow:hidden;
        word-wrap: break-word;    
    }

    #pseudo{
        background-color: lawngreen;
    }

    #article{
        height: 300px;
        width: 400px;
        background-color: chocolate;
        overflow:hidden;
    }

    #contenu{
        display: flex;
        width: 100%;
        height: 100%;
        background-color: lightblue;
        overflow:hidden;
        word-wrap: break-word;
    }

    #texte{
        height: 300px;
        width: 100%;
        word-wrap: break-word;
        text-overflow:hidden;
    }

</style>