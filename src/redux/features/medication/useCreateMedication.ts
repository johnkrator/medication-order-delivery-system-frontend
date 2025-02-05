import {useMutation, useQueryClient} from "react-query";
import {CreateMedicationDto} from "../../../common/interfaces.ts";
import {medicationApi} from "../APIs/medicationApi.ts";

export const useCreateMedication = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (medicationData: CreateMedicationDto) => medicationApi.createMedication(medicationData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("medications");
            },
            onError: (error) => {
                console.error("Medication creation failed", error);
            }
        }
    );
};
