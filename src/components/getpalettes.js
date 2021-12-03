

async function getPalettes(selectedcolfam){
    const result = await fetch(
        `http://localhost:3001/palettes/${selectedcolfam}`, { method: 'GET' }
        )
    let fetched_info = await result.json();
    return(fetched_info)
}

export default getPalettes