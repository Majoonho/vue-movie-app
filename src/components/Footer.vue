<template>
    <footer>
        <Logo/>
        <a 
        href="https://github.com/Majoonho"
        target="_blank">
        (c){{ new Date().getFullYear() }} Majoonho
        </a>

    </footer>
</template>

<script>
import Logo from "~/components/Logo"

export default {
    components:{
        Logo
    }
}
</script>


<style lang="scss" scoped>
footer {
    text-align: center;
    opacity: 0.3;
    padding: 70px 0;
    
    .logo {
        display: block;
        margin-bottom: 4px;
    }
}

</style>