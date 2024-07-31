<style scoped>

span {
    font-weight: 500;
}

.copyright {
    color: white;
    margin-bottom: 0.5rem;
}

.btn {
    border-color: white;
    color: white;
}

.btn:hover {
    background-color: white;
    border-color: white;
    color: gray;
}

</style>

<template>

<div class="p-2 bg-secondary">
    <p align="middle">
        <div class="copyright">
            <span>© 2024 Copyright: Hyeonho Kang</span>
        </div>
        <div>
            <button class="btn btn-outline-secondary mx-2" @click="open('linkedin')">
                <i class="fab fa-linkedin"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('github')">
                <i class="fab fa-github"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('angellist')">
                <i class="fab fa-angellist"></i>
            </button>
        </div>
    </p>
</div>

</template>

<script>

import info from "../info";

export default {
    name: "Footer",
    data() {
        return {
            linkedin: info.links.linkedin,
            github: info.links.github,
            angellist: info.links.angellist,
            resume: info.links.resume,
        };
    },
    methods: {
        open(link) {
            switch (link) {
                case "linkedin":
                    window.open(this.linkedin, "_blank");
                    break;
                case "github":
                    window.open(this.github, "_blank");
                    break;
                case "angellist":
                    window.open(this.angellist, "_blank");
                    break;
                case "resume":
                    window.open(this.resume, "_blank");
                    break;
            }
        },
    },
};

</script>
