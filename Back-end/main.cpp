#include <iostream>
#include <string>
#include <unordered_map>
#include <queue>
#include "httplib.h"
#include "json.hpp"

using namespace std;
using json = nlohmann::json;

struct Usuario {
    string nome;
    string email;
    string senha;
    int pontos;
};

struct Doacao {
    string emailDoador;
    double valor;
    string causa; 
};

class SistemaArrecadacao {
private:
    unordered_map<string, Usuario> usuariosCadastrados;
    queue<Doacao> filaDeDoacoes;

public:
    SistemaArrecadacao() {
        usuariosCadastrados["felipe@email.com"] = {"Felipe", "felipe@email.com", "senha123", 0};
    }

    int receberDoacao(string email, double valor, string causa) {
        if (usuariosCadastrados.find(email) == usuariosCadastrados.end()) {
            return -1; 
        }

        filaDeDoacoes.push({email, valor, causa});
        int pontosGanhos = static_cast<int>(valor * 10);
        usuariosCadastrados[email].pontos += pontosGanhos;
        
        cout << "[SISTEMA] Doacao na fila: R$" << valor << " para " << causa << endl;
        return pontosGanhos;
    }
};

int main() {
    SistemaArrecadacao sistema;
    httplib::Server servidor; 

    servidor.Post("/api/doar", [&](const httplib::Request& req, httplib::Response& res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");

        try {
            auto dados = json::parse(req.body);
            string email = dados["email"];
            double valor = dados["valor"];
            string causa = dados["causa"];

            int pontos = sistema.receberDoacao(email, valor, causa);

            json resposta;
            if (pontos >= 0) {
                resposta["status"] = "sucesso";
                resposta["mensagem"] = "Doação recebida e na fila!";
                resposta["pontosGanhos"] = pontos;
                res.status = 200;
            } else {
                resposta["status"] = "erro";
                resposta["mensagem"] = "Usuário não encontrado.";
                res.status = 400;
            }

            res.set_content(resposta.dump(), "application/json");

        } catch (...) {
            res.status = 500;
            res.set_content(R"({"status": "erro", "mensagem": "Dados inválidos"})", "application/json");
        }
    });

    servidor.Options("/api/doar", [](const httplib::Request&, httplib::Response& res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.status = 200;
    });

    cout << "--- SERVIDOR UPLIFT INICIADO ---" << endl;
    cout << "Escutando na porta 8080..." << endl;
    servidor.listen("localhost", 8080);

    return 0;
}