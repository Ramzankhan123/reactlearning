export async function getAlbums(type : any) {
    const response = await fetch(`http://localhost:3000/${type}`);
    const json = await response.json();
    return json;
  }