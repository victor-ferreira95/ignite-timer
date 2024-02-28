import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ZapConeta</td>
              <td>20 minutos</td>
              <td>ha 2 segundos</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>ZapConeta</td>
              <td>20 minutos</td>
              <td>ha 2 segundos</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>ZapConeta</td>
              <td>20 minutos</td>
              <td>ha 2 segundos</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>ZapConeta</td>
              <td>20 minutos</td>
              <td>ha 2 segundos</td>
              <td>Pendente</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
