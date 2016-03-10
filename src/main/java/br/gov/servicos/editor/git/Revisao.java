package br.gov.servicos.editor.git;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.Wither;
import org.eclipse.jgit.revwalk.RevCommit;

import java.io.Serializable;
import java.util.Date;

@Data
@Wither
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Revisao implements Serializable {
    String hash;
    String autor;
    Date horario;

    public Revisao(RevCommit commit) {
        hash = commit.getId().getName();
        autor = commit.getAuthorIdent().getName();
        horario = commit.getAuthorIdent().getWhen();
    }
}
