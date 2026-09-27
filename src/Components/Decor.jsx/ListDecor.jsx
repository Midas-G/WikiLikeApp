function ListDecor({ shape, size }) {
    const shapes = {
        square: "",
        diamond: "rotate-45",
        circle: "rounded-[100vw]",
    }
    const sizes = {
        sm: "w-2 h-2",
        md: "w-4 h-4",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
    }
    return(
        <span className={`inline-block select-all mx-6 bg-[var(--border)] group-hover:bg-[var(--accent)] hover:bg-[var(--accent)] ${sizes[size]} ${shapes[shape]}`}></span>
    );
}
export default ListDecor