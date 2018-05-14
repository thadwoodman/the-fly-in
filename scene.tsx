
import { createElement, ScriptableScene } from "metaverse-api";

export default class SharkAnimation extends ScriptableScene {
    state = {
        bitestate: false,
        dancestate: false
    };

    async sceneDidMount() {
        this.eventSubscriber.on(`supershark_click`, () => this.clickedOnShark());
    }

    clickedOnShark() {
        this.setState({ bitestate: !this.state.bitestate });
    }

    async render() {
        return (
            <scene>

	                <gltf-model
	                    id="greenship"
	                    position={{ x: 3, y: .03, z: 5 }}
	                    scale={.5}
	                    src="models/sgreen.glb"
	                />
	                 <gltf-model
	                    id="pinkship"
	                    position={{ x: 5, y: .05, z: 8 }}
	                    scale={.5}
	                    src="models/spink.glb"
	                />
	                 <gltf-model
	                    id="blueship"
	                    position={{ x: 3, y: .05, z: 6 }}
	                    scale={.5}
	                    src="models/sblue.glb"
	                />
	                 <gltf-model
	                    id="orangeship"
	                    position={{ x: 7, y: .02, z: 2 }}
	                    scale={.5}
	                    src="models/sorang.glb"
	                />
	                <gltf-model
	                    id="screen"
	                    position={{ x: 7, y: .03, z: 3 }}
	                    scale={0.3}
	                  //  src="models/screentest2.glb"
	                />
	                <plane
	                    id="movie"
	                    position={{x: 5, y: 3, z: 0}}
	                    scale={2.5}
	                    height={1}
	                    width={2}
	                    material={{src: "video/divine.gif"}}
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
