import {useMutation, useQueryClient} from "react-query";
import {CreateMedicationDto} from "../../common/interfaces";
import {medicationApi} from "./APIs/medicationApi";

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
