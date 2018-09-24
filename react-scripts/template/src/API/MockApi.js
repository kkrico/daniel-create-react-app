import delay from "./delay";

const fakeApiResponse = {
    "success": true,
    "data": [
        {
            "id": "b6136c52-bd2d-4395-8aaf-026ca34fbd6e",
            "nome": "Michael Douglas",
            "dataAniversario": "1994-07-26T08:22:00"
        },
        {
            "id": "7e1f30d4-e5f6-4395-b06e-1ab3c16693d0",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "6631d854-d4cf-4cd9-9da7-239de5e0d13a",
            "nome": "Adryan Leão",
            "dataAniversario": "1994-07-26T08:22:00"
        },
        {
            "id": "6f285b4f-1e46-4213-81a8-26630ad475ad",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "7b4d4e21-39d2-4d0f-9bef-4360e8caa411",
            "nome": "Daniel Alves",
            "dataAniversario": "0212-07-26T08:22:00"
        },
        {
            "id": "0da14ead-0ae7-4062-b499-45436701da2e",
            "nome": "Osvaldo de Melo",
            "dataAniversario": "1994-07-26T08:22:00"
        },
        {
            "id": "9771b151-d589-4172-95d7-718bc83f7d8f",
            "nome": "Adryan",
            "dataAniversario": "1994-07-26T07:22:00"
        },
        {
            "id": "9da84c3d-fc74-43c9-b570-73b852c0e5b5",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "e309ca26-842d-4466-bc91-90b823f04d32",
            "nome": "Daniel Ferreira Ramos",
            "dataAniversario": "1992-05-07T00:00:00"
        },
        {
            "id": "364e7295-7dd4-434b-8ab3-9278397c16bc",
            "nome": "Teste",
            "dataAniversario": "1994-03-19T07:22:00"
        },
        {
            "id": "450c6a76-76f2-4f59-891b-94f5b03df9a6",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "8972b66f-2b4a-4df4-b17c-959d7499ff2e",
            "nome": "Daniel Alves",
            "dataAniversario": "1994-07-26T08:22:00"
        },
        {
            "id": "d8929353-a1bd-4c89-a40a-ac868140b856",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "23de9de1-c997-456b-ba41-b9f6d814c72c",
            "nome": "Adryan Leao",
            "dataAniversario": "2000-03-19T07:22:00"
        },
        {
            "id": "d117e57d-d8f1-43b0-b55a-ddd92e90b570",
            "nome": "Teste",
            "dataAniversario": "1994-03-19T07:22:00"
        },
        {
            "id": "0efd5e59-3507-4bcc-b7e0-f9b5f231929e",
            "nome": "Daniel Ramos",
            "dataAniversario": "1992-07-05T00:00:00"
        }
    ]
}
class MockApi {
    static getAllFuncionarios() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(fakeApiResponse);
            }, delay);
        })
    }
}

export default MockApi;