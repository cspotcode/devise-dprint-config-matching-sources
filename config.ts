export interface Config {
    "arguments.preferHanging"?:                                       boolean;
    "arguments.preferSingleLine"?:                                    boolean;
    "arguments.trailingCommas"?:                                      string;
    "arrayExpression.preferHanging"?:                                 boolean;
    "arrayExpression.preferSingleLine"?:                              boolean;
    "arrayExpression.trailingCommas"?:                                string;
    "arrayPattern.preferHanging"?:                                    boolean;
    "arrayPattern.preferSingleLine"?:                                 boolean;
    "arrayPattern.trailingCommas"?:                                   string;
    "arrowFunction.bracePosition"?:                                   string;
    "arrowFunction.useParentheses"?:                                  string;
    "binaryExpression.linePerExpression"?:                            boolean;
    "binaryExpression.operatorPosition"?:                             string;
    "binaryExpression.preferSingleLine"?:                             boolean;
    "binaryExpression.spaceSurroundingBitwiseAndArithmeticOperator"?: boolean;
    bracePosition?:                                                   string;
    "classDeclaration.bracePosition"?:                                string;
    "classExpression.bracePosition"?:                                 string;
    "commentLine.forceSpaceAfterSlashes"?:                            boolean;
    "computed.preferSingleLine"?:                                     boolean;
    "conditionalExpression.operatorPosition"?:                        string;
    "conditionalExpression.preferSingleLine"?:                        boolean;
    "conditionalType.preferSingleLine"?:                              boolean;
    "constructor.bracePosition"?:                                     string;
    "constructor.spaceBeforeParentheses"?:                            boolean;
    "constructorType.spaceAfterNewKeyword"?:                          boolean;
    "constructSignature.spaceAfterNewKeyword"?:                       boolean;
    "decorators.preferSingleLine"?:                                   boolean;
    deno?:                                                            boolean;
    "doWhileStatement.bracePosition"?:                                string;
    "doWhileStatement.preferHanging"?:                                boolean;
    "doWhileStatement.spaceAfterWhileKeyword"?:                       boolean;
    "enumDeclaration.bracePosition"?:                                 string;
    "enumDeclaration.memberSpacing"?:                                 string;
    "enumDeclaration.trailingCommas"?:                                string;
    "exportDeclaration.preferHanging"?:                               boolean;
    "exportDeclaration.preferSingleLine"?:                            boolean;
    "exportDeclaration.sortNamedExports"?:                            string;
    "exportDeclaration.spaceSurroundingNamedExports"?:                boolean;
    "exportDeclaration.trailingCommas"?:                              string;
    "extendsClause.preferHanging"?:                                   boolean;
    "forInStatement.bracePosition"?:                                  string;
    "forInStatement.preferHanging"?:                                  boolean;
    "forInStatement.singleBodyPosition"?:                             string;
    "forInStatement.spaceAfterForKeyword"?:                           boolean;
    "forInStatement.useBraces"?:                                      string;
    "forOfStatement.bracePosition"?:                                  string;
    "forOfStatement.preferHanging"?:                                  boolean;
    "forOfStatement.singleBodyPosition"?:                             string;
    "forOfStatement.spaceAfterForKeyword"?:                           boolean;
    "forOfStatement.useBraces"?:                                      string;
    "forStatement.bracePosition"?:                                    string;
    "forStatement.preferHanging"?:                                    boolean;
    "forStatement.preferSingleLine"?:                                 boolean;
    "forStatement.singleBodyPosition"?:                               string;
    "forStatement.spaceAfterForKeyword"?:                             boolean;
    "forStatement.spaceAfterSemiColons"?:                             boolean;
    "forStatement.useBraces"?:                                        string;
    "functionDeclaration.bracePosition"?:                             string;
    "functionDeclaration.spaceBeforeParentheses"?:                    boolean;
    "functionExpression.bracePosition"?:                              string;
    "functionExpression.spaceAfterFunctionKeyword"?:                  boolean;
    "functionExpression.spaceBeforeParentheses"?:                     boolean;
    "getAccessor.bracePosition"?:                                     string;
    "getAccessor.spaceBeforeParentheses"?:                            boolean;
    "ifStatement.bracePosition"?:                                     string;
    "ifStatement.nextControlFlowPosition"?:                           string;
    "ifStatement.preferHanging"?:                                     boolean;
    "ifStatement.singleBodyPosition"?:                                string;
    "ifStatement.spaceAfterIfKeyword"?:                               boolean;
    "ifStatement.useBraces"?:                                         string;
    /**
     * The text to use for a file ignore comment (ex. `// dprint-ignore-file`).
     */
    ignoreFileCommentText?: string;
    /**
     * The text to use for an ignore comment (ex. `// dprint-ignore`).
     */
    ignoreNodeCommentText?:                            string;
    "implementsClause.preferHanging"?:                 boolean;
    "importDeclaration.preferHanging"?:                boolean;
    "importDeclaration.preferSingleLine"?:             boolean;
    "importDeclaration.sortNamedImports"?:             string;
    "importDeclaration.spaceSurroundingNamedImports"?: boolean;
    "importDeclaration.trailingCommas"?:               string;
    /**
     * The number of columns for an indent.
     */
    indentWidth?:                                         number;
    "interfaceDeclaration.bracePosition"?:                string;
    "jsx.multiLineParens"?:                               string;
    "jsx.quoteStyle"?:                                    string;
    "jsxAttributes.preferHanging"?:                       boolean;
    "jsxAttributes.preferSingleLine"?:                    boolean;
    "jsxElement.preferSingleLine"?:                       boolean;
    "jsxElement.spaceBeforeSelfClosingTagSlash"?:         boolean;
    "jsxExpressionContainer.spaceSurroundingExpression"?: boolean;
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed
     * this width in certain cases.
     */
    lineWidth?: number;
    /**
     * Whether the configuration is not allowed to be overriden or extended.
     */
    locked?:                                        boolean;
    "mappedType.preferSingleLine"?:                 boolean;
    "memberExpression.linePerExpression"?:          boolean;
    "memberExpression.preferSingleLine"?:           boolean;
    "method.bracePosition"?:                        string;
    "method.spaceBeforeParentheses"?:               boolean;
    "module.sortExportDeclarations"?:               string;
    "module.sortImportDeclarations"?:               string;
    "moduleDeclaration.bracePosition"?:             string;
    newLineKind?:                                   string;
    nextControlFlowPosition?:                       string;
    "objectExpression.preferHanging"?:              boolean;
    "objectExpression.preferSingleLine"?:           boolean;
    "objectExpression.spaceSurroundingProperties"?: boolean;
    "objectExpression.trailingCommas"?:             string;
    "objectPattern.preferHanging"?:                 boolean;
    "objectPattern.preferSingleLine"?:              boolean;
    "objectPattern.spaceSurroundingProperties"?:    boolean;
    "objectPattern.trailingCommas"?:                string;
    operatorPosition?:                              string;
    "parameters.preferHanging"?:                    boolean;
    "parameters.preferSingleLine"?:                 boolean;
    "parameters.trailingCommas"?:                   string;
    "parentheses.preferSingleLine"?:                boolean;
    preferHanging?:                                 boolean;
    preferSingleLine?:                              boolean;
    quoteStyle?:                                    string;
    semiColons?:                                    string;
    "sequenceExpression.preferHanging"?:            boolean;
    "setAccessor.bracePosition"?:                   string;
    "setAccessor.spaceBeforeParentheses"?:          boolean;
    singleBodyPosition?:                            string;
    spaceSurroundingProperties?:                    boolean;
    "staticBlock.bracePosition"?:                   string;
    "switchCase.bracePosition"?:                    string;
    "switchStatement.bracePosition"?:               string;
    "switchStatement.preferHanging"?:               boolean;
    "taggedTemplate.spaceBeforeLiteral"?:           boolean;
    trailingCommas?:                                string;
    "tryStatement.bracePosition"?:                  string;
    "tryStatement.nextControlFlowPosition"?:        string;
    "tupleType.preferHanging"?:                     boolean;
    "tupleType.preferSingleLine"?:                  boolean;
    "tupleType.trailingCommas"?:                    string;
    "typeAnnotation.spaceBeforeColon"?:             boolean;
    "typeAssertion.spaceBeforeExpression"?:         boolean;
    "typeLiteral.preferHanging"?:                   boolean;
    "typeLiteral.preferSingleLine"?:                boolean;
    "typeLiteral.separatorKind"?:                   string;
    "typeLiteral.separatorKind.multiLine"?:         string;
    "typeLiteral.separatorKind.singleLine"?:        string;
    "typeLiteral.spaceSurroundingProperties"?:      boolean;
    "typeLiteral.trailingCommas"?:                  string;
    "typeParameters.preferHanging"?:                boolean;
    "typeParameters.preferSingleLine"?:             boolean;
    "typeParameters.trailingCommas"?:               string;
    "unionAndIntersectionType.preferHanging"?:      boolean;
    "unionAndIntersectionType.preferSingleLine"?:   boolean;
    useBraces?:                                     string;
    useTabs?:                                       boolean;
    "variableStatement.preferHanging"?:             boolean;
    "variableStatement.preferSingleLine"?:          boolean;
    "whileStatement.bracePosition"?:                string;
    "whileStatement.preferHanging"?:                boolean;
    "whileStatement.singleBodyPosition"?:           string;
    "whileStatement.spaceAfterWhileKeyword"?:       boolean;
    "whileStatement.useBraces"?:                    string;
}
