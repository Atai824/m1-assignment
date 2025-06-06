var fileNames = [];         // file names like pet1, pet2...etc
            var photos = [];            // image elements
            var imageList = [];         // final <li> blocks
            var captions = [
                "Bella", "Max", "Luna", "Charlie", "Milo",
                "Lucy", "Rocky", "Daisy", "Buddy", "Chloe"
        ];
        var hoverDescriptions = [
            "Loves to cuddle and play.",
            "Very loyal and energetic.",
            "Curious and friendly.",
            "Loves attention and belly rubs.",
            "Calm and peaceful.",
            "Always ready for a walk.",
            "A bit shy at first, but very sweet.",
            "Full of energy and fun.",
            "Loves to nap in the sun.",
            "Small but very brave."
        ];
        var longDescriptions = [
           "Bella is a calm and curious cat who enjoys sitting by the window and watching the world go by. She loves soft blankets and gentle petting.",
           "Max is a playful and affectionate cat who loves to curl up in warm blankets and follow you around the house.",
            "Luna is a quiet and curious cat who loves to nap in sunny spots and watch birds from the window.",
            "Charlie brings joy and energy to every room. He’s great with kids and loves snuggling up at night.",
            "Milo is gentle and smart, perfect for a calm household. He’s very attentive and well-behaved.",
            "Lucy is a sweet dog who enjoys company and is always ready for a cuddle or a gentle walk in the park.",
            "Rocky starts off shy, but once he warms up, he’s full of love and loyalty. Great for patient owners.",
            "Daisy is full of energy and fun. She’s always looking for her next adventure and loves to play outdoors.",
            "Buddy is a dog with a big heart. He enjoys being the center of attention and will follow you everywhere.",
            "Chloe is a relaxed and elegant cat who enjoys peace and quiet. She’s a perfect companion for a cozy home."
        ];
        var image;
        var openList;
        var closeList = "</li>";
        for (var i = 0; i < 10; i++) {
            fileNames.push("pet" + (i + 1)); // pet1, pet2, etc.
            photos.push("<img src='images/" + fileNames[i] + ".jpg' alt='" + captions[i] + "'>");
            openList = "<li id='photo'>";
            var caption = "<div class='caption'>" + captions[i] + "</div>";
            var description = "<div class='description'>" + hoverDescriptions[i] + "</div>";
            image = openList + photos[i] + caption + description + closeList;
            imageList.push(image);
        }
        document.getElementById("album").innerHTML = imageList.join('');

        // Description by click
        //document.addEventListener("DOMContentLoaded", function () {
            //var photoElements = document.querySelectorAll("#photo");
            //var infobox = document.getElementById("infoBox");
            //var heading = document.getElementById("infoHeading");
            //var text = document.getElementById("infoText");
            //var closeLink = document.getElementById("closeLink");
            //photoElements.forEach(function (photo, index) {
                //photo.addEventListener("click", function () {
                    //heading.innerText = captions[index];
                    //text.innerText = longDescriptions[index];
                    //infoBox.classList.add("show");
                //});
            //});
            //closeLink.addEventListener("click", function () {
                //infoBox.classList.remove("show");
            //});
        //});
        // End of Description //Remove when description needed
        
        //jQuery code for LIGHTBOX
        $(document).ready(function() {
            $('#album').on('click', 'img', function() {
                let imgClone = $(this).clone();
                $('.backdrop').css({ 'display': 'block' }).animate({ 'opacity': '.5'}, 300);
                $('.box').fadeIn();

                // To delete image at the back
                if ($('.box').children('img')) {
                    $('.box').children('img').remove();
                }
                $('.box').append(imgClone);
            });

            //To remove the picture by clicking "x"
            $('.close, .backdrop').click(function() {
                $('.backdrop').animate({ 'opacity': '0' }, 300, function() {
                    $('.backdrop').css('display', 'none');
                });
                $('.box').fadeOut();
            });
        });