export const dynamic = "force-static";
export default function Page(){
  return (
    <main style={{margin:0,padding:0,height:"100dvh"}}>
      <iframe src="/content.html" style={{width:"100%",height:"100%",border:0}} title="CV"/>
    </main>
  );
}
