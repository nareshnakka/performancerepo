<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.1.1 r1855137">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">
      <stringProp name="TestPlan.comments"></stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
      <stringProp name="TestPlan.user_define_classpath"></stringProp>
    </TestPlan>
    <hashTree>
      <Arguments guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments">
          <elementProp name="host" elementType="Argument">
            <stringProp name="Argument.name">host</stringProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
          <elementProp name="scheme" elementType="Argument">
            <stringProp name="Argument.name">scheme</stringProp>
            <stringProp name="Argument.value">https</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </Arguments>
      <hashTree/>
      <ConfigTestElement guiclass="HttpDefaultsGui" testclass="ConfigTestElement" testname="HTTP Request Defaults" enabled="true">
        <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
          <collectionProp name="Arguments.arguments"/>
        </elementProp>
        <stringProp name="HTTPSampler.domain"></stringProp>
        <stringProp name="HTTPSampler.port"></stringProp>
        <stringProp name="HTTPSampler.protocol">https</stringProp>
        <stringProp name="HTTPSampler.contentEncoding"></stringProp>
        <stringProp name="HTTPSampler.path"></stringProp>
        <stringProp name="HTTPSampler.concurrentPool">6</stringProp>
        <stringProp name="HTTPSampler.connect_timeout"></stringProp>
        <stringProp name="HTTPSampler.response_timeout"></stringProp>
      </ConfigTestElement>
      <hashTree/>
      <CookieManager guiclass="CookiePanel" testclass="CookieManager" testname="HTTP Cookie Manager" enabled="true">
        <collectionProp name="CookieManager.cookies"/>
        <boolProp name="CookieManager.clearEachIteration">true</boolProp>
      </CookieManager>
      <hashTree/>
      <CacheManager guiclass="CacheManagerGui" testclass="CacheManager" testname="HTTP Cache Manager" enabled="true">
        <boolProp name="clearEachIteration">false</boolProp>
        <boolProp name="useExpires">true</boolProp>
      </CacheManager>
      <hashTree/>
      <CSVDataSet guiclass="TestBeanGUI" testclass="CSVDataSet" testname="SearchDates" enabled="true">
        <stringProp name="delimiter">,</stringProp>
        <stringProp name="fileEncoding"></stringProp>
        <stringProp name="filename">SearchDates.csv</stringProp>
        <boolProp name="ignoreFirstLine">false</boolProp>
        <boolProp name="quotedData">false</boolProp>
        <boolProp name="recycle">true</boolProp>
        <stringProp name="shareMode">shareMode.all</stringProp>
        <boolProp name="stopThread">false</boolProp>
        <stringProp name="variableNames">fromDate,toDate</stringProp>
      </CSVDataSet>
      <hashTree/>
      <RandomVariableConfig guiclass="TestBeanGUI" testclass="RandomVariableConfig" testname="numnberOfChildre" enabled="true">
        <stringProp name="maximumValue">0</stringProp>
        <stringProp name="minimumValue">0</stringProp>
        <stringProp name="outputFormat"></stringProp>
        <boolProp name="perThread">true</boolProp>
        <stringProp name="randomSeed"></stringProp>
        <stringProp name="variableName">children</stringProp>
      </RandomVariableConfig>
      <hashTree/>
      <RandomVariableConfig guiclass="TestBeanGUI" testclass="RandomVariableConfig" testname="numnberOfAdults" enabled="true">
        <stringProp name="maximumValue">3</stringProp>
        <stringProp name="minimumValue">1</stringProp>
        <stringProp name="outputFormat"></stringProp>
        <boolProp name="perThread">true</boolProp>
        <stringProp name="randomSeed"></stringProp>
        <stringProp name="variableName">adults</stringProp>
      </RandomVariableConfig>
      <hashTree/>
      <RandomVariableConfig guiclass="TestBeanGUI" testclass="RandomVariableConfig" testname="jsonIndex" enabled="true">
        <stringProp name="variableName">jsonIndex</stringProp>
        <stringProp name="outputFormat"></stringProp>
        <stringProp name="minimumValue">0</stringProp>
        <stringProp name="maximumValue">100</stringProp>
        <stringProp name="randomSeed"></stringProp>
        <boolProp name="perThread">false</boolProp>
      </RandomVariableConfig>
      <hashTree/>
      <BackendListener guiclass="BackendListenerGui" testclass="BackendListener" testname="Backend Listener" enabled="true">
        <elementProp name="arguments" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" enabled="true">
          <collectionProp name="Arguments.arguments">
            <elementProp name="es.scheme" elementType="Argument">
              <stringProp name="Argument.name">es.scheme</stringProp>
              <stringProp name="Argument.value">http</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.host" elementType="Argument">
              <stringProp name="Argument.name">es.host</stringProp>
              <stringProp name="Argument.value">127.0.0.1</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.port" elementType="Argument">
              <stringProp name="Argument.name">es.port</stringProp>
              <stringProp name="Argument.value">8888</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.index" elementType="Argument">
              <stringProp name="Argument.name">es.index</stringProp>
              <stringProp name="Argument.value">qapurchasepower</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.timestamp" elementType="Argument">
              <stringProp name="Argument.name">es.timestamp</stringProp>
              <stringProp name="Argument.value">yyyy-MM-dd&apos;T&apos;HH:mm:ss.SSSZZ</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.bulk.size" elementType="Argument">
              <stringProp name="Argument.name">es.bulk.size</stringProp>
              <stringProp name="Argument.value">100</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.timout.ms" elementType="Argument">
              <stringProp name="Argument.name">es.timout.ms</stringProp>
              <stringProp name="Argument.value">200</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.sample.filter" elementType="Argument">
              <stringProp name="Argument.name">es.sample.filter</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.fields" elementType="Argument">
              <stringProp name="Argument.name">es.fields</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.test.mode" elementType="Argument">
              <stringProp name="Argument.name">es.test.mode</stringProp>
              <stringProp name="Argument.value">info</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.xpack.user" elementType="Argument">
              <stringProp name="Argument.name">es.xpack.user</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.xpack.password" elementType="Argument">
              <stringProp name="Argument.name">es.xpack.password</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.parse.all.req.headers" elementType="Argument">
              <stringProp name="Argument.name">es.parse.all.req.headers</stringProp>
              <stringProp name="Argument.value">false</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.parse.all.res.headers" elementType="Argument">
              <stringProp name="Argument.name">es.parse.all.res.headers</stringProp>
              <stringProp name="Argument.value">false</stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.aws.endpoint" elementType="Argument">
              <stringProp name="Argument.name">es.aws.endpoint</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.aws.region" elementType="Argument">
              <stringProp name="Argument.name">es.aws.region</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.ssl.truststore.path" elementType="Argument">
              <stringProp name="Argument.name">es.ssl.truststore.path</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.ssl.truststore.pw" elementType="Argument">
              <stringProp name="Argument.name">es.ssl.truststore.pw</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.ssl.keystore.path" elementType="Argument">
              <stringProp name="Argument.name">es.ssl.keystore.path</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
            <elementProp name="es.ssl.keystore.pw" elementType="Argument">
              <stringProp name="Argument.name">es.ssl.keystore.pw</stringProp>
              <stringProp name="Argument.value"></stringProp>
              <stringProp name="Argument.metadata">=</stringProp>
            </elementProp>
          </collectionProp>
        </elementProp>
        <stringProp name="classname">io.github.delirius325.jmeter.backendlistener.elasticsearch.ElasticsearchBackendClient</stringProp>
      </BackendListener>
      <hashTree/>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">startnextloop</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">
          <boolProp name="LoopController.continue_forever">false</boolProp>
          <intProp name="LoopController.loops">-1</intProp>
        </elementProp>
        <stringProp name="ThreadGroup.num_threads">10</stringProp>
        <stringProp name="ThreadGroup.ramp_time">1</stringProp>
        <longProp name="ThreadGroup.start_time">1370726934000</longProp>
        <longProp name="ThreadGroup.end_time">1370726934000</longProp>
        <boolProp name="ThreadGroup.scheduler">true</boolProp>
        <stringProp name="ThreadGroup.duration">1800</stringProp>
        <stringProp name="ThreadGroup.delay"></stringProp>
        <stringProp name="TestPlan.comments">${__P(users,)} ${__P(rampup,)}</stringProp>
      </ThreadGroup>
      <hashTree>
        <TransactionController guiclass="TransactionControllerGui" testclass="TransactionController" testname="01-OpenURL" enabled="true">
          <boolProp name="TransactionController.includeTimers">false</boolProp>
          <boolProp name="TransactionController.parent">true</boolProp>
        </TransactionController>
        <hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="01 - www.purchasingpower.travel" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <boolProp name="HTTPSampler.concurrentDwn">true</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ConstantTimer guiclass="ConstantTimerGui" testclass="ConstantTimer" testname="Constant Timer" enabled="true">
              <stringProp name="ConstantTimer.delay">5000</stringProp>
            </ConstantTimer>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="242 /Views/Layout.html" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Views/Layout.html</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/html</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="243 /Views/Home.html" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Views/Home.html</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/html</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="246 /img/flightHome.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/flightHome.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="245 /img/hotelHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/hotelHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="247 /img/flightHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/flightHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="248 /img/beachHome.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/beachHome.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="250 /img/cruiseHome.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/cruiseHome.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="249 /img/beachHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/beachHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="252 /content/js/bootstrap-datepicker.min.js" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="_" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">_</stringProp>
                  <stringProp name="Argument.value">1563374239212</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/js/bootstrap-datepicker.min.js</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="X-Requested-With" elementType="Header">
                  <stringProp name="Header.name">X-Requested-With</stringProp>
                  <stringProp name="Header.value">XMLHttpRequest</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="251 /content/css/component.css" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/css/component.css</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/css,*/*;q=0.1</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="253 /content/js/customs-datepicker.js" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="_" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">_</stringProp>
                  <stringProp name="Argument.value">1563374239213</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/js/customs-datepicker.js</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="X-Requested-With" elementType="Header">
                  <stringProp name="Header.name">X-Requested-With</stringProp>
                  <stringProp name="Header.value">XMLHttpRequest</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="255 /fonts/helveticaneue/helveticaneuemed-webfont.woff2" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/helveticaneue/helveticaneuemed-webfont.woff2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="257 /fonts/helveticaneue/HelveticaNeueLTStd-Bd.woff" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/helveticaneue/HelveticaNeueLTStd-Bd.woff</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="258 /fonts/H2DMvhDLycM56KNuAtbJYA.woff2" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/H2DMvhDLycM56KNuAtbJYA.woff2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="254 /fonts/glyphicons-halflings-regular.woff2" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/glyphicons-halflings-regular.woff2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/bootstrap.min.css</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="256 /fonts/fontawesome-webfont78ce.woff" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="v" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">v</stringProp>
                  <stringProp name="Argument.value">4.2.0</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/fontawesome-webfont78ce.woff</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/font-awesome.min.css</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="259 /content/images/gif-load-BigImage.gif" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/images/gif-load-BigImage.gif</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="263 /Api/api/Home/GetHomePageImages" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Home/GetHomePageImages</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="265 /Views/Partial/Footer.html" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Views/Partial/Footer.html</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="264 /Views/Partial/Header.html" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Views/Partial/Header.html</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="262 /Api/api/Markup/GetMarkupList" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Markup/GetMarkupList</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="268 /img/icon-calendar.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/icon-calendar.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="269 /img/selectIcon.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/selectIcon.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="270 /img/cruiseHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/cruiseHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="271 /img/carHome.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/carHome.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="272 /img/carHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/carHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="273 /Api/api/User/GetPPCUserInfo" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="JWTToken" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">JWTToken</stringProp>
                  <stringProp name="Argument.value">eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/User/GetPPCUserInfo</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <RegexExtractor guiclass="RegexExtractorGui" testclass="RegexExtractor" testname="userid" enabled="true">
              <stringProp name="RegexExtractor.useHeaders">false</stringProp>
              <stringProp name="RegexExtractor.refname">userid</stringProp>
              <stringProp name="RegexExtractor.regex">&quot;id&quot;:(\d+),&quot;</stringProp>
              <stringProp name="RegexExtractor.template">$1$</stringProp>
              <stringProp name="RegexExtractor.default"></stringProp>
              <stringProp name="RegexExtractor.match_number">1</stringProp>
            </RegexExtractor>
            <hashTree/>
            <RegexExtractor guiclass="RegexExtractorGui" testclass="RegexExtractor" testname="clientId" enabled="true">
              <stringProp name="RegexExtractor.useHeaders">false</stringProp>
              <stringProp name="RegexExtractor.refname">clientId</stringProp>
              <stringProp name="RegexExtractor.regex">&quot;clientId&quot;:&quot;(\d+)&quot;</stringProp>
              <stringProp name="RegexExtractor.template">$1$</stringProp>
              <stringProp name="RegexExtractor.default"></stringProp>
              <stringProp name="RegexExtractor.match_number">1</stringProp>
            </RegexExtractor>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="267 /img/hero-home-1.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/hero-home-1.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="277 /img/attractionHome.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/attractionHome.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="274 /img/icon-home-1.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/icon-home-1.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="275 /img/attractionHome-w.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/attractionHome-w.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="278 /Api/api/User/GetPPCUserInfo" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="JWTToken" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">JWTToken</stringProp>
                  <stringProp name="Argument.value">eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding">utf-8</stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/User/GetPPCUserInfo</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="276 /fonts/EsvMC5un3kjyUhB9ZEPPwg.woff2" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/EsvMC5un3kjyUhB9ZEPPwg.woff2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="279 /fonts/PLygLKRVCQnA5fhu3qk5fQ.woff2" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/fonts/PLygLKRVCQnA5fhu3qk5fQ.woff2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/css/custom.css?ver=57</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">identity</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="282 /img/icon-home-2.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/icon-home-2.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="284 /img/icon-home-4.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/icon-home-4.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="283 /img/icon-home-3.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/icon-home-3.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="285 /img/logo.png" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/logo.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="286 /img/hero-home-2.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/hero-home-2.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="287 /img/hero-home-3.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/hero-home-3.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="288 /img/hero-home-4.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/img/hero-home-4.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="294 /Images/featured-homepage-caesarsPalace-2.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-homepage-caesarsPalace-2.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="290 /Images/featured-homepage-gateshotel.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-homepage-gateshotel.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="289 /Images/featured-homepage-fiestaAmericanaCancun.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-homepage-fiestaAmericanaCancun.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="291 /Images/featured-cruise-kids-1%20(002).jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-cruise-kids-1%20(002).jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="293 /Images/featured-homepage-disney.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-homepage-disney.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="292 /Images/featured-flight-westinSeattle.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">admin.qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Images/featured-flight-westinSeattle.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="304 /clients/logos/qls_logo.jpg" enabled="false">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">images.purchasingpower.com</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/clients/logos/qls_logo.jpg</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
        </hashTree>
        <TransactionController guiclass="TransactionControllerGui" testclass="TransactionController" testname="02-Enter NewYork City" enabled="true">
          <boolProp name="TransactionController.includeTimers">false</boolProp>
          <boolProp name="TransactionController.parent">true</boolProp>
        </TransactionController>
        <hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="327 /Api/api/Hotels/GetHotelSearchLocationsList" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="searchString" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">searchString</stringProp>
                  <stringProp name="Argument.value">New+York+City</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Hotels/GetHotelSearchLocationsList</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ConstantTimer guiclass="ConstantTimerGui" testclass="ConstantTimer" testname="Constant Timer" enabled="true">
              <stringProp name="ConstantTimer.delay">5000</stringProp>
            </ConstantTimer>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="328 /Api/api/Hotels/GetHotelSearchLocationsList" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="searchString" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">searchString</stringProp>
                  <stringProp name="Argument.value">New+York+City</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Hotels/GetHotelSearchLocationsList</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="-58479648">locationName</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_data</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
        </hashTree>
        <TransactionController guiclass="TransactionControllerGui" testclass="TransactionController" testname="03-Search" enabled="true">
          <boolProp name="TransactionController.includeTimers">false</boolProp>
          <boolProp name="TransactionController.parent">true</boolProp>
        </TransactionController>
        <hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="347 /Views/HotelResult.html" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Views/HotelResult.html</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/html</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ConstantTimer guiclass="ConstantTimerGui" testclass="ConstantTimer" testname="Constant Timer" enabled="false">
              <stringProp name="ConstantTimer.delay">5000</stringProp>
            </ConstantTimer>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="349 /css/NewThemeStyle.css" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/css/NewThemeStyle.css</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/css,*/*;q=0.1</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="351 /content/js/customs-datepicker.js" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="_" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">_</stringProp>
                  <stringProp name="Argument.value">1563374239214</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/js/customs-datepicker.js</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="X-Requested-With" elementType="Header">
                  <stringProp name="Header.name">X-Requested-With</stringProp>
                  <stringProp name="Header.value">XMLHttpRequest</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="350 /css/custom.css" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/css/custom.css</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">text/css,*/*;q=0.1</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="353 /Api/api/Markup/GetMarkupListByCategory" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="category" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">category</stringProp>
                  <stringProp name="Argument.value">7</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="clientCode" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">clientCode</stringProp>
                  <stringProp name="Argument.value">${clientId}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Markup/GetMarkupListByCategory</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="352 /Api/api/Markup/GetMarkupListByCategory" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="category" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">category</stringProp>
                  <stringProp name="Argument.value">1</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="clientCode" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">clientCode</stringProp>
                  <stringProp name="Argument.value">${clientId}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Markup/GetMarkupListByCategory</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="355 /Api/api/Cart/GetCartItemList" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="CallForCart" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">CallForCart</stringProp>
                  <stringProp name="Argument.value">true</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="userId" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">userId</stringProp>
                  <stringProp name="Argument.value">${userid}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Cart/GetCartItemList</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="357 /content/css/images/checkbox_unchecked.png" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/content/css/images/checkbox_unchecked.png</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/content/css/component.css</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">image/webp,*/*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
          </hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="354 /Api/api/Hotels/GetResultsWithCacheV2" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
              <collectionProp name="Arguments.arguments">
                <elementProp name="locationType" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">locationType</stringProp>
                  <stringProp name="Argument.value">city_id</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="locationId" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">locationId</stringProp>
                  <stringProp name="Argument.value">800049480</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="check_in" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">check_in</stringProp>
                  <stringProp name="Argument.value">${fromDate}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="check_out" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">check_out</stringProp>
                  <stringProp name="Argument.value">${toDate}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="adults" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">adults</stringProp>
                  <stringProp name="Argument.value">${adults}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="children" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">children</stringProp>
                  <stringProp name="Argument.value">${children}</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="rooms" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">rooms</stringProp>
                  <stringProp name="Argument.value">1</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="locationName" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">locationName</stringProp>
                  <stringProp name="Argument.value">New%20York%20City</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
                <elementProp name="feedProvider" elementType="HTTPArgument">
                  <boolProp name="HTTPArgument.always_encode">false</boolProp>
                  <stringProp name="Argument.name">feedProvider</stringProp>
                  <stringProp name="Argument.value">priceline</stringProp>
                  <stringProp name="Argument.metadata">=</stringProp>
                  <boolProp name="HTTPArgument.use_equals">true</boolProp>
                </elementProp>
              </collectionProp>
            </elementProp>
            <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
            <stringProp name="HTTPSampler.port">443</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/Api/api/Hotels/GetResultsWithCacheV2</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree>
            <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
              <collectionProp name="HeaderManager.headers">
                <elementProp name="Referer" elementType="Header">
                  <stringProp name="Header.name">Referer</stringProp>
                  <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/Home?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJwcGMiLCJpYXQiOjE1NDE2NzQyMzksImp0aSI6IjVlODg3MDRiLWUyMDctNDViOS1hNGU4LTdjMjdiYzQzNGE1MyIsImNsaWVudElkIjoiMjMxNSIsImN1c3RvbWVySWQiOiJkYnJlZXMxQG1haWxpbmF0b3IuY29tIiwiZmlyc3ROYW1lIjoiU3Jpbml2YXMiLCJsYXN0TmFtZSI6Ik1hamlnYSIsImVtYWlsIjoiZGJyZWVzMUBtYWlsaW5hdG9yLmNvbSIsInNwZW5kaW5nTGltaXQiOiIxMDcwNS4wIiwidGVybSI6MTIsInBheUN5Y2xlc1BlclllYXIiOjI2LCJlbGlnaWJsZSI6dHJ1ZSwiY2xpZW50TG9nb1VybCI6Imh0dHBzOi8vaW1hZ2VzLnB1cmNoYXNpbmdwb3dlci5jb20vY2xpZW50cy9sb2dvcy9xbHNfbG9nby5qcGciLCJyZXR1cm5VcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUvY2FydD9yZWNhbGN1bGF0ZT10cnVlJnJlc3RvcmVDYXJ0PXRydWUiLCJjYW5jZWxVcmwiOiJodHRwczovL3Byb2o2LnB1cmNoYXNpbmdwb3dlci5jb20vc3RvcmUiLCJrZWVwQWxpdmVVcmwiOiIifQ.US6Hxt-mYhMOfipmetA8Z5G3ffHKF0ICwgqN_SEq_X-8QfbcazTUTDLoq3YuTeoQoVZczJ3w8Pce_P7waULvgQ</stringProp>
                </elementProp>
                <elementProp name="Accept-Language" elementType="Header">
                  <stringProp name="Header.name">Accept-Language</stringProp>
                  <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                </elementProp>
                <elementProp name="Accept-Encoding" elementType="Header">
                  <stringProp name="Header.name">Accept-Encoding</stringProp>
                  <stringProp name="Header.value">gzip, deflate, br</stringProp>
                </elementProp>
                <elementProp name="User-Agent" elementType="Header">
                  <stringProp name="Header.name">User-Agent</stringProp>
                  <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                </elementProp>
                <elementProp name="Accept" elementType="Header">
                  <stringProp name="Header.name">Accept</stringProp>
                  <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                </elementProp>
              </collectionProp>
            </HeaderManager>
            <hashTree/>
            <BoundaryExtractor guiclass="BoundaryExtractorGui" testclass="BoundaryExtractor" testname="hotelId" enabled="false">
              <stringProp name="BoundaryExtractor.useHeaders">false</stringProp>
              <stringProp name="BoundaryExtractor.refname">hotelId</stringProp>
              <stringProp name="BoundaryExtractor.lboundary">&quot;hotelId&quot;:</stringProp>
              <stringProp name="BoundaryExtractor.rboundary">,</stringProp>
              <stringProp name="BoundaryExtractor.default"></stringProp>
              <boolProp name="BoundaryExtractor.default_empty_value">false</boolProp>
              <stringProp name="BoundaryExtractor.match_number">0</stringProp>
            </BoundaryExtractor>
            <hashTree/>
            <BoundaryExtractor guiclass="BoundaryExtractorGui" testclass="BoundaryExtractor" testname="ppn_bundle" enabled="false">
              <stringProp name="BoundaryExtractor.useHeaders">false</stringProp>
              <stringProp name="BoundaryExtractor.refname">ppn_bundle</stringProp>
              <stringProp name="BoundaryExtractor.lboundary">ppn_bundle&quot;:&quot;</stringProp>
              <stringProp name="BoundaryExtractor.rboundary">&quot;</stringProp>
              <stringProp name="BoundaryExtractor.default"></stringProp>
              <boolProp name="BoundaryExtractor.default_empty_value">false</boolProp>
              <stringProp name="BoundaryExtractor.match_number">0</stringProp>
            </BoundaryExtractor>
            <hashTree/>
            <RegexExtractor guiclass="RegexExtractorGui" testclass="RegexExtractor" testname="hotelId" enabled="false">
              <stringProp name="RegexExtractor.useHeaders">false</stringProp>
              <stringProp name="RegexExtractor.refname">hotelId</stringProp>
              <stringProp name="RegexExtractor.regex">&quot;hotelId&quot;:(.*?),</stringProp>
              <stringProp name="RegexExtractor.template">$1$</stringProp>
              <stringProp name="RegexExtractor.default">0</stringProp>
              <stringProp name="RegexExtractor.match_number">0</stringProp>
            </RegexExtractor>
            <hashTree/>
            <BeanShellPostProcessor guiclass="TestBeanGUI" testclass="BeanShellPostProcessor" testname="BeanShell PostProcessor" enabled="false">
              <stringProp name="filename"></stringProp>
              <stringProp name="parameters"></stringProp>
              <boolProp name="resetInterpreter">false</boolProp>
              <stringProp name="script">import java.util.Random;


Random rand = new Random();
randomNum = minimum + rand.nextInt((maximum - minimum) + 1);</stringProp>
            </BeanShellPostProcessor>
            <hashTree/>
            <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
              <collectionProp name="Asserion.test_strings">
                <stringProp name="49586">200</stringProp>
              </collectionProp>
              <stringProp name="Assertion.custom_message"></stringProp>
              <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
              <boolProp name="Assertion.assume_success">false</boolProp>
              <intProp name="Assertion.test_type">16</intProp>
            </ResponseAssertion>
            <hashTree/>
            <JSONPostProcessor guiclass="JSONPostProcessorGui" testclass="JSONPostProcessor" testname="hotelId" enabled="true">
              <stringProp name="JSONPostProcessor.referenceNames">hotelId</stringProp>
              <stringProp name="JSONPostProcessor.jsonPathExprs">$[${jsonIndex}].hotelId</stringProp>
              <stringProp name="JSONPostProcessor.match_numbers">0</stringProp>
              <stringProp name="JSONPostProcessor.defaultValues">0</stringProp>
            </JSONPostProcessor>
            <hashTree/>
            <JSONPostProcessor guiclass="JSONPostProcessorGui" testclass="JSONPostProcessor" testname="ppn_bundle" enabled="true">
              <stringProp name="JSONPostProcessor.referenceNames">ppn_bundle</stringProp>
              <stringProp name="JSONPostProcessor.jsonPathExprs">$[${jsonIndex}].ppn_bundle</stringProp>
              <stringProp name="JSONPostProcessor.match_numbers">0</stringProp>
              <stringProp name="JSONPostProcessor.defaultValues">0</stringProp>
            </JSONPostProcessor>
            <hashTree/>
          </hashTree>
        </hashTree>
        <IfController guiclass="IfControllerPanel" testclass="IfController" testname="If Controller" enabled="true">
          <stringProp name="IfController.condition">${hotelId}!=&apos;0&apos;</stringProp>
          <boolProp name="IfController.evaluateAll">false</boolProp>
        </IfController>
        <hashTree>
          <TransactionController guiclass="TransactionControllerGui" testclass="TransactionController" testname="04-RandomView_Hotel" enabled="true">
            <boolProp name="TransactionController.includeTimers">false</boolProp>
            <boolProp name="TransactionController.parent">true</boolProp>
          </TransactionController>
          <hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="396 /Views/HotelDetail.html" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments"/>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding"></stringProp>
              <stringProp name="HTTPSampler.path">/Views/HotelDetail.html</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">text/html</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ConstantTimer guiclass="ConstantTimerGui" testclass="ConstantTimer" testname="Constant Timer" enabled="true">
                <stringProp name="ConstantTimer.delay">10000</stringProp>
              </ConstantTimer>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="398 /content/js/bootstrap-datepicker.min.js" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="_" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">_</stringProp>
                    <stringProp name="Argument.value">1563374239215</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding"></stringProp>
              <stringProp name="HTTPSampler.path">/content/js/bootstrap-datepicker.min.js</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="X-Requested-With" elementType="Header">
                    <stringProp name="Header.name">X-Requested-With</stringProp>
                    <stringProp name="Header.value">XMLHttpRequest</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="399 /content/js/customs-datepicker.js" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="_" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">_</stringProp>
                    <stringProp name="Argument.value">1563374239216</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding"></stringProp>
              <stringProp name="HTTPSampler.path">/content/js/customs-datepicker.js</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="X-Requested-With" elementType="Header">
                    <stringProp name="Header.name">X-Requested-With</stringProp>
                    <stringProp name="Header.value">XMLHttpRequest</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="401 /Api/api/Markup/GetMarkupListByCategory" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="category" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">category</stringProp>
                    <stringProp name="Argument.value">1</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="clientCode" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">clientCode</stringProp>
                    <stringProp name="Argument.value">${clientId}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding">utf-8</stringProp>
              <stringProp name="HTTPSampler.path">/Api/api/Markup/GetMarkupListByCategory</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
                <collectionProp name="Asserion.test_strings">
                  <stringProp name="49586">200</stringProp>
                </collectionProp>
                <stringProp name="Assertion.custom_message"></stringProp>
                <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
                <boolProp name="Assertion.assume_success">false</boolProp>
                <intProp name="Assertion.test_type">16</intProp>
              </ResponseAssertion>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="402 /Api/api/Markup/GetMarkupListByCategory" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="category" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">category</stringProp>
                    <stringProp name="Argument.value">7</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="clientCode" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">clientCode</stringProp>
                    <stringProp name="Argument.value">${clientId}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding">utf-8</stringProp>
              <stringProp name="HTTPSampler.path">/Api/api/Markup/GetMarkupListByCategory</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
                <collectionProp name="Asserion.test_strings">
                  <stringProp name="49586">200</stringProp>
                </collectionProp>
                <stringProp name="Assertion.custom_message"></stringProp>
                <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
                <boolProp name="Assertion.assume_success">false</boolProp>
                <intProp name="Assertion.test_type">16</intProp>
              </ResponseAssertion>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="400 /Api/api/Cart/GetReturnablePolicy" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments"/>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding"></stringProp>
              <stringProp name="HTTPSampler.path">/Api/api/Cart/GetReturnablePolicy</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
                <collectionProp name="Asserion.test_strings">
                  <stringProp name="49586">200</stringProp>
                </collectionProp>
                <stringProp name="Assertion.custom_message"></stringProp>
                <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
                <boolProp name="Assertion.assume_success">false</boolProp>
                <intProp name="Assertion.test_type">16</intProp>
              </ResponseAssertion>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="404 /Api/api/Cart/GetCartItemList" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="CallForCart" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">CallForCart</stringProp>
                    <stringProp name="Argument.value">true</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="userId" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">userId</stringProp>
                    <stringProp name="Argument.value">${userid}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding">utf-8</stringProp>
              <stringProp name="HTTPSampler.path">/Api/api/Cart/GetCartItemList</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelDetail</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
                <collectionProp name="Asserion.test_strings">
                  <stringProp name="49586">200</stringProp>
                </collectionProp>
                <stringProp name="Assertion.custom_message"></stringProp>
                <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
                <boolProp name="Assertion.assume_success">false</boolProp>
                <intProp name="Assertion.test_type">16</intProp>
              </ResponseAssertion>
              <hashTree/>
            </hashTree>
            <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="403 /Api/api/Hotels/GetHotelDetails" enabled="true">
              <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">
                <collectionProp name="Arguments.arguments">
                  <elementProp name="hotel_id" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">hotel_id</stringProp>
                    <stringProp name="Argument.value">${hotelId}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="check_in" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">check_in</stringProp>
                    <stringProp name="Argument.value">${fromDate}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="check_out" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">check_out</stringProp>
                    <stringProp name="Argument.value">${toDate}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="ppn_bundle" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">ppn_bundle</stringProp>
                    <stringProp name="Argument.value">${ppn_bundle}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="adults" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">adults</stringProp>
                    <stringProp name="Argument.value">${adults}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="childs" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">childs</stringProp>
                    <stringProp name="Argument.value">${children}</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="infants" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">infants</stringProp>
                    <stringProp name="Argument.value">0</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                  <elementProp name="noOfRooms" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.value">1</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                    <stringProp name="Argument.name">noOfRooms</stringProp>
                  </elementProp>
                  <elementProp name="feedProvider" elementType="HTTPArgument">
                    <boolProp name="HTTPArgument.always_encode">false</boolProp>
                    <stringProp name="Argument.name">feedProvider</stringProp>
                    <stringProp name="Argument.value">priceline</stringProp>
                    <stringProp name="Argument.metadata">=</stringProp>
                    <boolProp name="HTTPArgument.use_equals">true</boolProp>
                  </elementProp>
                </collectionProp>
              </elementProp>
              <stringProp name="HTTPSampler.domain">qa.purchasingpower.travel</stringProp>
              <stringProp name="HTTPSampler.port">443</stringProp>
              <stringProp name="HTTPSampler.protocol"></stringProp>
              <stringProp name="HTTPSampler.contentEncoding"></stringProp>
              <stringProp name="HTTPSampler.path">/Api/api/Hotels/GetHotelDetails</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
              <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
              <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
              <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
              <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
              <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
              <stringProp name="HTTPSampler.connect_timeout"></stringProp>
              <stringProp name="HTTPSampler.response_timeout"></stringProp>
            </HTTPSamplerProxy>
            <hashTree>
              <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
                <collectionProp name="HeaderManager.headers">
                  <elementProp name="Referer" elementType="Header">
                    <stringProp name="Header.name">Referer</stringProp>
                    <stringProp name="Header.value">${scheme}://qa.purchasingpower.travel/app/HotelResult</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Language" elementType="Header">
                    <stringProp name="Header.name">Accept-Language</stringProp>
                    <stringProp name="Header.value">en-US,en;q=0.5</stringProp>
                  </elementProp>
                  <elementProp name="Accept-Encoding" elementType="Header">
                    <stringProp name="Header.name">Accept-Encoding</stringProp>
                    <stringProp name="Header.value">gzip, deflate, br</stringProp>
                  </elementProp>
                  <elementProp name="User-Agent" elementType="Header">
                    <stringProp name="Header.name">User-Agent</stringProp>
                    <stringProp name="Header.value">Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0</stringProp>
                  </elementProp>
                  <elementProp name="Accept" elementType="Header">
                    <stringProp name="Header.name">Accept</stringProp>
                    <stringProp name="Header.value">application/json, text/plain, */*</stringProp>
                  </elementProp>
                </collectionProp>
              </HeaderManager>
              <hashTree/>
              <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">
                <collectionProp name="Asserion.test_strings">
                  <stringProp name="321666459">&quot;result&quot;:&quot;Successs</stringProp>
                </collectionProp>
                <stringProp name="Assertion.custom_message"></stringProp>
                <stringProp name="Assertion.test_field">Assertion.response_data</stringProp>
                <boolProp name="Assertion.assume_success">false</boolProp>
                <intProp name="Assertion.test_type">16</intProp>
              </ResponseAssertion>
              <hashTree/>
            </hashTree>
          </hashTree>
        </hashTree>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
