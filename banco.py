import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
USUARIOS_DB = BASE_DIR / "usuarios.db"
ANIMAIS_DB = BASE_DIR / "animais_extincao.db"

ESPECIES = [
    ("Amazônia", "Onça-pintada", "Panthera onca", "Vulneravel"),
    ("Amazônia", "Boto-cor-de-rosa", "Inia geoffrensis", "Em perigo"),
    ("Amazônia", "Gavião-real", "Harpia harpyja", "Vulneravel"),
    ("Amazônia", "Macaco-aranha", "Ateles belzebuth", "Em perigo"),
    ("Cerrado", "Lobo-guará", "Chrysocyon brachyurus", "Vulneravel"),
    ("Cerrado", "Arara-azul-grande", "Anodorhynchus hyacinthinus", "Vulneravel"),
    ("Cerrado", "Tamanduá-bandeira", "Myrmecophaga tridactyla", "Vulneravel"),
    ("Cerrado", "Tatu-canastra", "Priodontes maximus", "Vulneravel"),
    ("Mata Atlântica", "Mico-leão-dourado", "Leontopithecus rosalia", "Em perigo"),
    ("Mata Atlântica", "Jacutinga", "Aburria jacutinga", "Em perigo"),
    ("Mata Atlântica", "Bugio-ruivo", "Alouatta guariba", "Vulneravel"),
    ("Mata Atlântica", "Preguiça-de-coleira", "Bradypus torquatus", "Vulneravel"),
    ("Caatinga", "Tatu-bola", "Tolypeutes tricinctus", "Criticamente em perigo"),
    ("Caatinga", "Ararinha-azul", "Cyanopsitta spixii", "Criticamente em perigo"),
    ("Caatinga", "Soldadinho-do-araripe", "Antilophia bokermanni", "Criticamente em perigo"),
    ("Caatinga", "Veado-catingueiro", "Mazama gouazoubira", "Vulneravel"),
    ("Pantanal", "Ariranha", "Pteronura brasiliensis", "Em perigo"),
    ("Pantanal", "Cervo-do-pantanal", "Blastocerus dichotomus", "Vulneravel"),
    ("Pantanal", "Jacaré-do-pantanal", "Caiman yacare", "Vulneravel"),
    ("Pantanal", "Lontra", "Lontra longicaudis", "Vulneravel"),
    ("Pampa", "Gato-do-mato-pequeno", "Leopardus guttulus", "Vulneravel"),
    ("Pampa", "Veado-campeiro", "Ozotoceros bezoarticus", "Vulneravel"),
    ("Pampa", "Cachorro-do-mato", "Cerdocyon thous", "Vulneravel"),
    ("Pampa", "Coruja-buraqueira", "Athene cunicularia", "Vulneravel"),
]

def conectar():

    return sqlite3.connect(USUARIOS_DB)


def conectar_animais():

    conexao = sqlite3.connect(ANIMAIS_DB)
    conexao.row_factory = sqlite3.Row

    return conexao


def criar_tabela():

    conexao = conectar()

    cursor = conexao.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS usuarios (

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT UNIQUE,
        senha TEXT
    )
    """)

    conexao.commit()
    conexao.close()


def cadastrar(usuario, senha):

    conexao = conectar()

    cursor = conexao.cursor()

    try:

        cursor.execute("""
        INSERT INTO usuarios (usuario, senha)
        VALUES (?, ?)
        """, (usuario, senha))

        conexao.commit()

        return True

    except:

        return False

    finally:

        conexao.close()


def login(usuario, senha):

    conexao = conectar()

    cursor = conexao.cursor()

    cursor.execute("""
    SELECT * FROM usuarios
    WHERE usuario=? AND senha=?
    """, (usuario, senha))

    usuario_encontrado = cursor.fetchone()

    conexao.close()

    return usuario_encontrado


def criar_tabela_especies():

    conexao = conectar_animais()

    cursor = conexao.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS especies (

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bioma TEXT,
        nome_comum TEXT,
        nome_cientifico TEXT,
        categoria_ameaca TEXT,
        UNIQUE (bioma, nome_comum)
    )
    """)

    cursor.executemany("""
    INSERT OR IGNORE INTO especies (
        bioma,
        nome_comum,
        nome_cientifico,
        categoria_ameaca
    )
    VALUES (?, ?, ?, ?)
    """, ESPECIES)

    conexao.commit()
    conexao.close()


def buscar_especies_por_bioma(bioma):

    conexao = conectar_animais()

    cursor = conexao.cursor()

    cursor.execute("""
    SELECT nome_comum, nome_cientifico, categoria_ameaca
    FROM especies
    WHERE bioma=?
    ORDER BY nome_comum
    """, (bioma,))

    especies = cursor.fetchall()

    conexao.close()

    return [dict(especie) for especie in especies]


criar_tabela()
criar_tabela_especies()
