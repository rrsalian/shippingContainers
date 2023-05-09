import { LightContainer } from "./lightContainer";

describe ("Test Constructor", () => {
    test("validate destination & cargoWeigth are set from the constructor" , () => {
        const lightContainer = new LightContainer('Paris',300);
        expect(lightContainer.destination).toEqual('Paris');
        expect(lightContainer.cargoWeight).toEqual(300);
    })
})


