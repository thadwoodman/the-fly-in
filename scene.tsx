
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
                    id="redcar"
                    position={{ x: 2, y: 2, z: 6 }}
                    scale={0.3}
                    src="models/fcf.glb"
                />
                 <gltf-model
                    id="bluecar"
                    position={{ x: 5, y: 5, z: 3 }}
                    scale={0.3}
                    src="models/fcfblue.glb"
                />
                 <gltf-model
                    id="graycar"
                    position={{ x: 7, y: 7, z: 1 }}
                    scale={0.3}
                    src="models/fcfgray.glb"
                />
                <gltf-model
                    id="screen"
                    position={{ x: 7, y: 2, z: 6 }}
                    scale={0.3}
                  //  src="models/screentest2.glb"
                />
                <plane
                    id="movie"
                    position={{x: 9.5, y: 3, z: 5}}
                    scale={2.5}
                    height={1}
                    width={2}
                    material={{src: "video/divine.gif"}}
                    rotation={{x: 0, y: 90, z: 0}}

                />
                <plane
                id="ground"
                position={{x: 5, y: 0, z: 5}}
                scale={10}
                material={{src: "image/ground.jpg"}}
                rotation={{x: 90, y: 0, z: 0}}

                />
            </scene>
        );
    }
}