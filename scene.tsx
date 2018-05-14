
import { createElement, ScriptableScene } from "metaverse-api";
const networkHz = 10
const interval = 1000 / networkHz
export default class FlyIn extends ScriptableScene<any, { time: number}> {
   	state = { time: 0}
   	timeout = setInterval(()=>{
   		this.setState({
   			time: performance.now() * 0.001
   		})
   	}, interval)
   	sceneWillUnmount(){
   		clearInterval(this.timeout)
   	}


   	async render() {
   		const float = Math.cos(this.state.time)
   		const glide = Math.sin(this.state.time)
         return (
            <scene>

	                <gltf-model
	                    id="greenship"
	                    position={{ x: (3 + glide/6), y: (.03 + float/10), z: 5 }}
	                    scale={.5}
	                    src="models/sgreen.glb"
	                />
	                 <gltf-model
	                    id="pinkship"
	                    position={{ x: (5 + float/8), y: (.05 + float/4), z: 8 }}
	                    scale={.5}
	                    src="models/spink.glb"
	                />
	                 <gltf-model
	                    id="blueship"
	                    position={{ x: (3 + float/10), y: (.05 + glide/12), z: 6 }}
	                    scale={.5}
	                    src="models/sblue.glb"
	                />
	                 <gltf-model
	                    id="orangeship"
	                    position={{ x: (7 + float/12), y: (.02 + glide/4), z: 2 }}
	                    scale={.5}
	                    src="models/sorang.glb"
	                />
	                <plane
	                    id="movie"
	                    position={{x: 5, y: 3, z: 0}}
	                    scale={2.5}
	                    height={1}
	                    width={2}
	                    material={{src: "image/fmt.jpg"}}
	                    rotation={{x: 0, y: 0, z: 0}}

	                />
	                <gltf-model
	                id="ground"
	                position={{x: 5, y: 0, z: 5}}
	                src="models/land.glb"
	                scale={.999}
	                />
            </scene>
        );
    }
}
