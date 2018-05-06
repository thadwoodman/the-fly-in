
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
                    id="supershark"
                    position={{ x: 1, y: 1, z: 1 }}
                    scale={0.5}
                    src="models/shark.gltf"
                    skeletalAnimation={
                        this.state.bitestate
                            ? [
                                  { clip: "shark_skeleton_bite", playing: false },
                                  { clip: "shark_skeleton_swim", weight: 0.2, playing: true }
                              ]
                            : [
                                  { clip: "shark_skeleton_bite", playing: true, loop: true },
                                  { clip: "shark_skeleton_swim", weight: 1.0, playing: true }
                              ]
                    }
                />
            </scene>
        );
    }
}