// -------------------------------------------------------------------
// Back to top JS

function backToTop() {
    return {
        visible: false,
        check() {
            this.visible = window.scrollY > 300
        },
        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}
// -------------------------------------------------------------------