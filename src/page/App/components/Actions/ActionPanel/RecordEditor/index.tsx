import { FC } from "react"
import { RecordEditorProps } from "@/page/App/components/Actions/ActionPanel/RecordEditor/interface"
import {
  recordEditorContainerStyle,
  recordEditorLabelStyle,
  recordEditorStyle,
  recordKeyStyle,
  recordNewButton,
  recordStyle,
  recordValueStyle,
} from "./style"
import { CodeEditor } from "@/components/CodeEditor"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { Button } from "@illa-design/button"
import { AddIcon, DeleteIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { useTranslation } from "react-i18next"

export const RecordEditor: FC<RecordEditorProps> = (props) => {
  const { records, label, onDelete, onAdd, onChangeKey, onChangeValue } = props

  const { t } = useTranslation()

  return (
    <div css={recordEditorContainerStyle}>
      <span css={recordEditorLabelStyle}>{label}</span>
      <div css={recordEditorStyle}>
        {records.map((record, index) => {
          return (
            <div css={recordStyle} key={index}>
              <CodeEditor
                css={recordKeyStyle}
                height="32px"
                value={record.key}
                mode="TEXT_JS"
                placeholder="key"
                borderRadius="8px 0 0 8px"
                expectedType={VALIDATION_TYPES.STRING}
                onChange={(value) => {
                  onChangeKey(index, value, record.value)
                }}
              />
              <CodeEditor
                css={recordValueStyle}
                height="32px"
                mode="TEXT_JS"
                placeholder="value"
                value={record.value}
                borderRadius="0 0 0 0"
                expectedType={VALIDATION_TYPES.STRING}
                onChange={(value) => {
                  onChangeValue(index, record.key, value)
                }}
              />
              <Button
                variant="outline"
                buttonRadius="0 8px 8px 0"
                colorScheme="gray"
                onClick={() => {
                  onDelete(index, record)
                }}
                leftIcon={
                  <DeleteIcon
                    color={globalColor(`--${illaPrefix}-grayBlue-08`)}
                  />
                }
              />
            </div>
          )
        })}
        <span>
          <Button
            _css={recordNewButton}
            colorScheme="techPurple"
            size="small"
            variant="text"
            onClick={() => {
              onAdd()
            }}
            leftIcon={
              <AddIcon color={globalColor(`--${illaPrefix}-techPurple-08`)} />
            }
          >
            {t("editor.action.panel.btn.new")}
          </Button>
        </span>
      </div>
    </div>
  )
}

RecordEditor.displayName = "RecordEditor"
