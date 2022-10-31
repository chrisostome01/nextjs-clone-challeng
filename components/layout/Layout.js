export default function Layout({ children }) {
    return(
        <div className="p-layout w-11/12 lg:max-w-1280 mx-auto">
            { children }
        </div>
    )
}