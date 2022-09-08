import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader 
        speed={2}
        width={220}
        height={300}
        viewBox="0 0 220 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="9" y="3" rx="3" ry="3" width="220" height="91" /> 
        <rect x="10" y="109" rx="3" ry="3" width="220" height="15" /> 
        <rect x="11" y="132" rx="3" ry="3" width="93" height="15" /> 
        <rect x="11" y="160" rx="3" ry="3" width="80" height="24" /> 
        <rect x="185" y="156" rx="3" ry="3" width="32" height="32" />
    </ContentLoader>
)

export default Skeleton;