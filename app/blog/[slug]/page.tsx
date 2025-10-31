export default async function BlogPostPage({
    params,
}:{
    params: Promise<{ slug: string }>
}){
    const {slug} = await params;
    return (
        <div>
            <h2>Detail Post Title of {slug}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio illum rerum qui earum. Praesentium ipsa, nemo, possimus rem nobis quidem voluptatibus nihil placeat sequi suscipit labore illo consequatur fugit?</p>
        </div>
    )
}