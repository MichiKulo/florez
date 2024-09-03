<script>
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
        console.log('El audio no pudo reproducirse automáticamente: ', error);
    });
});
</script>

</body>
</html>